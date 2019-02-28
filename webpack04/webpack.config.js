let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/[name]-[chunkhash].js',
    // 可以将路径或者路径片段解析成绝对路径
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 当前路径名字
        exclude: __dirname + 'node_modules', 
        include: __dirname + 'src', 
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      // 将script标签注入到body内；
      inject: 'body'
    })
  ]
}