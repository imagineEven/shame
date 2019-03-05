let webpack = require('webpack');
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2000
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
          }
        }
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
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}