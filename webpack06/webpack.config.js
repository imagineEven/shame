let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/Even.js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + 'node_modules',
        include: __dirname + 'src',
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: __dirname + 'node_modules',
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 10
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: __dirname + 'node_modules',
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9092,
    open: true
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}