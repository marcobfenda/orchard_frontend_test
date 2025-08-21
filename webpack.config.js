const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin"); // Add this line

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // cleans dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // handles CSS imports
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML template
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }), // Makes jQuery $ and jQuery global
    new CopyPlugin({
      patterns: [
        { 
          from: "src/img", 
          to: "img" 
        },
      ],
    }),
  ],
  mode: "production", // Production mode for minified builds
  // Removed devServer since this is build-only
};
