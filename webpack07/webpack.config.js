let webpack = require('webpack');
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'js/build.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9290,
    open: true,
    hot: true
  },
  module: {
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}