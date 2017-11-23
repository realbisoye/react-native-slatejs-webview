let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, '/app/slateWebview/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/ios/mobileDemo/'),
    filename: 'indexBundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '/app/slateWebview'),
        loaders: 'babel-loader',
      }
    ],
  }
};
