let path = require('path');
// 将生成不同名字的打包文件 自动插入到index.html
let htmlWebpackPlugins = require('html-webpack-plugin')
module.exports = {
  // webpack 会默认上下文为根目录,=>也就是上一级；
  entry: './src/script/main.js',
  output: {
    path: path.resolve('./dist'),
    // 相对于dist目录下的js文件
    filename: 'js/[name]-[chunkhash].js'
  },
  plugins: [
    new htmlWebpackPlugins({
      // 相对于dist目录（输出目录）下生成一个新的index.html文件 会随着根目录下的模板文件更新
      template: 'index.html'
    })
  ]
}