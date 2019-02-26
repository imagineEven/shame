let path = require('path');
module.exports = {
  entry: './src/script/main.js',
  output: {
    path: path.resolve('./dist/js'),
    filename: '[name]-[chunkhash].js'
  }
}