const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.config.prod");

module.exports = merge({}, config, {
  output: {
    publicPath: "https://github.com/trinhthang219/Xin3angular4lazyloading.git"
  },
});
