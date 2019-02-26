let path = require('path');
// 将生成不同名字的打包文件 自动插入到index.html
let htmlWebpackPlugins = require('html-webpack-plugin')
module.exports = {
  // webpack 会默认上下文为根目录,=>也就是上一级；
  entry: './src/script/main.js',
  output: {
    path: path.resolve('./dist'),
    // 相对于dist目录下的js文件
    filename: 'js/[name]-[chunkhash].js',
    // 指定src引入的地址；
    publicPath: 'http://cdn.com/'
  },
  plugins: [
    new htmlWebpackPlugins({
      // 相对于dist目录（输出目录）下生成一个新的index.html文件 会随着根目录下的模板文件更新
      template: 'index.html',
      // 设置webpack变量，在html页面里面用ejs语法 
      // htmlWebpackPlugin.options.title 来访问 
      title: '获取webpack里面的变量值',
      // 压缩配置index.html
      minify: {
        // 删除注视
        removeComments: true,
        // 删除空格
        collapseWhitespace: true,
      }
    })
  ]
}