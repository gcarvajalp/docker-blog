const path = require(`path`);
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  entry: "./public_html/src/js/like_button.js",
  output: {
    //publicPath: "/public_html",
    path: path.resolve(__dirname + "/public_html", "dist"),
    filename: "bundle.js",
  },
};
