import React from "react";
import { hot } from "react-hot-loader/root";
import routesArray from "./MainRouter/routesArray";
import MainRouter from "./MainRouter/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const App = (props) => {
  return (
    <Router>
      <div>ok</div>
      <MainRouter>{renderRoutes(routesArray)}</MainRouter>
    </Router>
  );
};

export default hot(App);
