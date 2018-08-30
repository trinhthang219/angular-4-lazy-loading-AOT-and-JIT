const webpack = require("webpack");
const path = require("path");

// const bundleExtractPlugin = new ExtractTextPlugin({
//   filename: 'css/bundle.css',
// });

// const vendorsExtractPlugin = new ExtractTextPlugin({
//     filename: 'css/vendors.css',
// });

module.exports = {
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: [
          "babel-loader",
          "angular2-load-children-loader",
          "light-ts-loader"
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ],
    noParse: [
      /zone\.js\/dist/,
    ]
  },
  entry: {
    // bundle: "./src/index",
    bundle_aot: "./src/index-aot"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/dist/",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  devtool: 'source-map',
  // plugins: [
  //   new webpack.DefinePlugin({
  //       SOCKET_URL: JSON.stringify('wss://localhost:3000/dist/'? 'wss://localhost:3000/dist/' : 'wss://localhost:3000'),
  //   }),
  //   bundleExtractPlugin,
  //   vendorsExtractPlugin,
  //   ],
};
