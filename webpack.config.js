const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
module.exports = {
  entry: "./src/script.js",
  output: {
    filename: "bundle.js",
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(png|gif)$/, use: "url-loader" },
      { test: /\.css$/, use: "css-loader" },
    ],
  },
  devServer: {
    static: "src",
    hot: true,
    open: true,
    port: 8000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new Dotenv(),
  ],
};
