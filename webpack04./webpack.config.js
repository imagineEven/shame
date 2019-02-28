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
        test: /\.js$/, 
        exclude: __dirname + 'node_modules', 
        include: __dirname + 'src', 
        loader: "babel-loader",
        options: {
          presets: ['env']
        }
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