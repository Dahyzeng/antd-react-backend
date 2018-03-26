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
        hot: true,
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join('/index.html') },
            ],
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "less-loader" // compiles Less to CSS
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
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.resolve(__dirname + '/img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
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