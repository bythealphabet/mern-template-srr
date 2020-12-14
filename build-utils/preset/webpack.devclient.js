const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    writeToDisk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Development Mode `,
      template: "./html-template-devclient/index.html",
    }),
  ],
});
