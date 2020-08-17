const path = require(`path`);
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins

let mode = `development`;

let entries = {
  btn: `./src/js/like_button.js`,
};

module.exports = {
  mode: mode,
  entry: entries,
  plugins: [
    //Añadir un HtmlWebpackPlugin por cada entry
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `src/pages/index.html`,
      chunks: [`btn`],
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],

  /*output: {
    publicPath: "/public_html",
    path: path.resolve(__dirname + "/public_html", "dist"),
    filename: "bundle.js",
  },*/
  output: {
    filename: `js/[name].[contenthash].js`,
    //Designa un directorio publico para los archivos. Puede generar problemas ya que es absoluto
    //publicPath: "/public_html",
    path: __dirname + `/public_html`,
    library: `[name]`,
  },
};
