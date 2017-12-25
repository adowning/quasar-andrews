var config = require('../config'),
    path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    cssUtils = require('./css-utils'),
    baseWebpackConfig = require('./webpack.base.conf.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/hot-reload'].concat(
        baseWebpackConfig.entry[name]
    )
})

module.exports = merge(baseWebpackConfig, {
    // eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true,
        port: 8081,
        host: '127.0.0.1',
        inline: true,
        quiet: true, // important
        hot: true,
        open: true,
        noInfo: true
    },
    module: {
        rules: cssUtils.styleRules({
            sourceMap: config.dev.cssSourceMap,
            postcss: true
        })
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin({
            clearConsole: config.dev.clearConsoleOnRebuild
        })
    ],
    performance: {
        hints: false
    }
})