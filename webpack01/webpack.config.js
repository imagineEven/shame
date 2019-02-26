let path = require('path');
module.exports = {
  entry: './src/script/main.js',
  output: {
    filename: 'bunld.js',
    path: path.resolve('./dist/js')
  }
}