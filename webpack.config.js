const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: [
    "./src/main.js",
    "./src/content-script.js",
    "./src/scripts/checkDate.js",
    "./src/scripts/sendNotify.js",
    "./src/scripts/storage.js",
    "./src/scripts/translation.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "content-script.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      { test: /\.css$/, use: "css-loader" },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
  experiments: {
    topLevelAwait: true,
  },
};
