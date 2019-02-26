let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 打包多个index.html文件，配置多个入口文件
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'js/[name]-[chunkhash].js'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html', 
      inject: 'body',
      // 与入口文件相对应
      chunks: ['a'],
      title: 'this is the a'
      // 排除不要打包的文件。
      // excludeChunks: []
    }),
    new htmlWebpackPlugin({
      filename: 'b.html',
      template: 'index.html',
      inject: 'body',
      // 与入口文件相对应
      chunks: ['b'],
      title: 'this is the b'
    }),
    new htmlWebpackPlugin({
      filename: 'main.html',
      template: 'index.html',
      inject: 'body',
      // 与入口文件相对应
      chunks: ['main'],
      title: 'this is the main'
    })
  ]
}