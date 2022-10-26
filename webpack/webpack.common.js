const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      // this loader for run .ts,.js,.tsx and jsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },

      // this loader required for run .css file
      { test: /\.css/, use: ['style-loader', 'css-loader'] },

      // this is webpack5 given type for images rendering
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // this is webpack5 type it for run fonts and svg's
      {
        test: /\.(woof()2?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'src', to: 'build' }],
    }),
  ],
}
