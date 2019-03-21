let webpack = require('webpack');
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let definePlugin = new webpack.DefinePlugin({
  // __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  optionsType: JSON.stringify(6)
});

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
        test: /\.(css|less)$/,
        exclude: __dirname + 'node_modules',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: './css'
            }
          },
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
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 2000
      //     }
      //   }
      // },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: './assets',
            name: '[name].[ext]'
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
      filename: '[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}