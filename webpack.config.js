/*jshint esversion: 6 */

const path = require('path');

module.exports = {
  entry: "./client/src/js/app.js",
  output: {
    path: path.resolve(__dirname, "client/public"),
    filename: "bundle.js"
  },
  mode: "development"
};