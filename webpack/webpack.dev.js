const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",

  // enable hot module replacement that is exchanges, adds, or removes modules while an application is running, without a full reload.
  devServer: {
    hot: true,
    open: true,
  },

  // cheap-module-source-map which a value create react-app recommends for dev environment
  // this property basically controls the generation of source map  for our code
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Gopi-dev"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
