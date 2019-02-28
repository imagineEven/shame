let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/[name]-[chunkhash].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use: 'babel-loader',
        include: /src/,          // 只转化src目录下的js
        exclude: /node_modules/  // 排除掉node_modules，优化打包速度
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