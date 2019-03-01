let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/[name]-[chunkhash].js',
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
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}