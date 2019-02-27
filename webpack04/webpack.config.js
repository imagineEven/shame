let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    a: './src/script/a.js',
    b: './src/script/a.js',
    main: './src/script/main.js'
  },
  output: {
    filename: 'js/[name]-[chunkhash].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'main.html',
      template: 'index.html',
      chunks: ['main']
    }),
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      chunks: ['a']
    })
  ]
}