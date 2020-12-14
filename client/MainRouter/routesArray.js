import loadable from "@loadable/component";

// -----------CORE

const Home = loadable(() => import("../containers/Home/Home"));

export default [
  {
    component: Home,
    path: "/",
  },
];
