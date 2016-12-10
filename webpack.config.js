var path = require('path')
var webpack = require('webpack')

var config = {
    entry: './main.js',
    output: { 
        path: __dirname, 
        filename: 'bundle.js' 
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config