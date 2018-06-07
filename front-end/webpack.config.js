const webpack = require("webpack");
const path = require('path')
const ConcatPlugin = require('webpack-concat-plugin')

module.exports = {
  entry: {
    dbhelper: './dev/js/dbhelper.js',
    main: './dev/js/main.js',
    rest: './dev/js/restaurant_info.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0']
          }
        }
      }
    ]
  }
}
