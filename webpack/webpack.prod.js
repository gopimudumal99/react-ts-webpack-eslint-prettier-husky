const webpack = require("webpack");

module.exports = {
  mode: "production",

  // this is also create react-app recommended value for production
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("codeEvolution"),
    }),
  ],
  // performance: {
    // hints: false,
    // maxEntrypointSize: 512000,
    // maxAssetSize: 512000,
  // },
};
