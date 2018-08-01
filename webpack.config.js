const path = require('path'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin')
require('babel-polyfill')

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: [
        'babel-polyfill',
        './client/index.js',
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                }],
            }
            //loaders for other file types can go here
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: '../static/images', to: '../assets/images' }])
    ]
}
