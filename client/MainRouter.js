import React, { useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Switch, Route } from "react-router-dom";

// -----------CORE
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";

// -----------NAVIGATION
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

// -----------Not Found Page
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

const MainRouter = () => {
  const [active, setActive] = useState(false);

  const isMenuActive = (isactive) => setActive(isactive);

  const stopScroll = css`
    position: fixed;
    overflow-y: hidden;
  `;

  const styles = css`
    display: grid;
    grid-template-rows: auto 1fr auto;
  `;
  const main = css`
    min-height: 90vh;
    grid-row: 2;
  `;

  return (
    <div css={styles}>
      <Header isMenuActive={isMenuActive} />
      <main css={main}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default MainRouter;
