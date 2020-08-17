const path = require(`path`);
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
const CleanWebpackPlugin = require(`clean-webpack-plugin`);
const HardSourceWebpackPlugin = require(`hard-source-webpack-plugin`);

let mode = `development`;

let entries = {
  btn: `./src/js/hooks.js`,
};

module.exports = {
  mode: mode,
  entry: entries,
  plugins: [
    new HardSourceWebpackPlugin(),
    new CleanWebpackPlugin(),
    //Añadir un HtmlWebpackPlugin por cada entry
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `src/pages/index.html`,
      chunks: [`btn`],
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],

  output: {
    filename: `js/[name].[contenthash].js`,
    //Designa un directorio publico para los archivos. Puede generar problemas ya que es absoluto
    //publicPath: "/public_html",
    path: __dirname + `/public_html`,
    library: `[name]`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
