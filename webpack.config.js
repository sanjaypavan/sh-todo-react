var path = require('path')
var webpack = require('webpack')


var config = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    debug: true,
    devtool: "eval-source-map",
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    }
};

module.exports = config