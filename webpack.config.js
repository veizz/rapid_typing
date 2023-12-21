const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  const IS_PRODUCTION = env.production || process.env.NODE_ENV === "production";

  return {
    mode: IS_PRODUCTION ? "production" : "development",

    entry: "./src/js/main.js",

    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "js/[name].[contenthash].bundle.js",
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 8000,
    },
  };
};
