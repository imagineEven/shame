let path = require('path');
module.exports = {
  // 入口文件
  entry: './src/script/main.js',
  // 出口文件
  output: {
    // 打包之后的文件名字
    filename: 'bunld.js',
    // 打包的路径
    path: path.resolve('./dist/js')
  }
}