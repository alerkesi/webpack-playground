'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index'
    },
    output: {
        path: path.resolve('./release'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.tsx', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(j|t)sx?$/,
                loaders: [
                    'babel-loader' +
                        '?cacheDirectory=babel_cache' +
                        // '&presets[]=es2015' +
                        '&presets[]=react'
                ]
            },
            // {
            //     test: /\.tsx?$/,
            //     loaders: [
            //         'ts-loader?transpileOnly=true'
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({

        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify('development')
                }
            }
        }),
      new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require("./release/dll_manifest.json")
      })
    ]
};