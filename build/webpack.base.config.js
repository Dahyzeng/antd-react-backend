'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: './app/index.js',
    entry: './app/reduxIndex.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'build.js'
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        hot: true,
        inline: true,
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
                exclude: [path.resolve('/node_modules')],
                use: [
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: [path.resolve('/node_modules')],
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            sourceMap: true,
                        }
                    }, {
                        loader: "less-loader", // compiles Less to CSS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                include: [path.resolve('app')],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["react","es2015","es2016", "es2017"],
                            plugins: ['transform-decorators-legacy','transform-decorators',["import", { libraryName: "antd", style: "css" }]]
                        }
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