'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        dll: ['react', 'lodash']
    },
    output: {
        path: path.resolve('./release'),
        filename: '[name].[hash].js',
        library: '[name]'
    },
    // resolve: {
    //     extensions: ['', '.js'],
    //     root: path.resolve('./src')
    // },
    plugins: [
      new webpack.DllPlugin({
          path: path.join(__dirname, "release", "[name]_manifest.json"),
          name: "[name]"
      })
    ]
};