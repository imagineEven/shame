let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/[name].js',
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
        // css-loader 处理css文件
        // style-loader 创建style标签插入index.html
        // postcss-loader 给类似flex等样式加前缀；
        // MiniCssExtractPlugin 插件 插入index.html里
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // 给@import引入的css文件加前缀
              importLoaders: 10, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
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
    // 在输出目录下生成css文件；
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css"
    })
  ]
}