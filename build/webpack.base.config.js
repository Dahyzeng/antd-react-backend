'use strict'
const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["react","es2015"] }
                    }
                ]
            }
        ]
    }
}