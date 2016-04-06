
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  node: {
    fs: "empty"
  },
  bail: true,
  debug: true,
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
  }
};
