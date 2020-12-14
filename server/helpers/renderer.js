import path from "path";

// REACT LIBRARY
import React from "react";
import { renderToString } from "react-dom/server";

//REACT ROUTER
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";

//LOADABLE COMPONENT
import { ChunkExtractor } from "@loadable/server";

//EMOTIONJS
import { CacheProvider } from "@emotion/core";
import createEmotionServer from "create-emotion-server";
import createCache from "@emotion/cache";

//CLIENT MAINROUTER COMPONENTE AND ROUTES ARRAY
import MainRouter from "../../client/MainRouter/MainRouter";
import routesArray from "../../client/MainRouter/routesArray";

// REDUX STUFF
import { Provider } from "react-redux";
import createStore from "./createStore";

// REACT-HELMET FOR HTML HEAD TAGS
import { Helmet } from "react-helmet";

//HTML TEMPLATE
import template from "./../../template";

// SERIALIZE-JAVASCRIPT
import serialize from "serialize-javascript";

const CURRENT_WORKING_DIR = process.cwd();
const statsFile = path.join(
  CURRENT_WORKING_DIR,
  "dist/web/loadable-stats.json"
);

function loadData(store, action, param) {
  return param ? store.dispatch(action(param)) : store.dispatch(action());
}

export default (req, res) => {
  const cache = createCache();
  const { extractCritical } = createEmotionServer(cache);
  const store = createStore();
  const context = {};

  const extractor = new ChunkExtractor({ statsFile });

  const promise = matchRoutes(routesArray, req.path).map(({ route }) => {
    let param = null;
    if (route.param) {
      const rawParams = req.params["0"];
      param = rawParams.substring(rawParams.lastIndexOf("/") + 1);
    }

    if (route.action) {
      return loadData(store, route.action, param)
        .then((data) => data)
        .catch((error) => console.log("error:", error));
    }
  });

  Promise.all(promise).then(() => {
    let element = (
      <Provider store={store}>
        <CacheProvider value={cache}>
          <StaticRouter location={req.url} context={context}>
            {extractor.collectChunks(
              <MainRouter>{renderRoutes(routesArray)}</MainRouter>
            )}
          </StaticRouter>
        </CacheProvider>
      </Provider>
    );

    const markup = extractCritical(renderToString(element));
    //  Markup contains ---->  const {html, ids, css } = markup

    const helmet = Helmet.renderStatic();
    const scriptTags = extractor.getScriptTags();

    if (context.notFound) {
      res.status(404).send(template(markup, helmet, scriptTags));
      return;
    }

    const initialState = serialize(store.getState());

    res.status(200).send(template(markup, helmet, initialState, scriptTags));
  });
};
