'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'build.js'
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        hot: true
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
                exclude: [path.resolve(__dirname + '/node_modules')],
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["react","es2015"] }
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}