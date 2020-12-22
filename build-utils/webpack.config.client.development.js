const path = require("path");
const webpack = require("webpack");

const CURRENT_WORKING_DIR = process.cwd();

function webpackClientDevelopment(mode, name) {
  return {
    name,
    devtool: "eval-source-map",
    entry: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?reload=true",
      path.join(CURRENT_WORKING_DIR, "/client/index.js"),
    ],
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  };
}

module.exports = webpackClientDevelopment;
