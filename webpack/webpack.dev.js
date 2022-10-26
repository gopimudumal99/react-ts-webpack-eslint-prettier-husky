const webpack = require("webpack");

module.exports = {
  mode: "development",
  // cheap-module-source-map which a value create react-app recommends for dev environment
  // this property basically controls the generation of source map  for our code
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Gopi-dev"),
    }),
  ],
};
