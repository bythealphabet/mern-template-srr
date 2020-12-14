import React from "react";

import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";

import { hydrate } from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./redux";

import { loadableReady } from "@loadable/component";

import App from "./App";

const cache = createCache();

const store = configureStore({ reducer, preloadedState: window.INITIAL_STATE });

loadableReady(() => {
  hydrate(
    <Provider store={store}>
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    </Provider>,
    document.getElementById("root")
  );
});
