var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    resolve: {
        modulesDirectories: ["node_modules"]
    },
    entry: {
        main: ['./js/main.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].bundle.js'
    },
    debug: true,
    devtool: '#eval-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loaders: [
                'style',
                'css'
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|woff2)$/i,
            loaders: [
                'file'
            ]
        }, {
            test: /\.json$/,
            loaders: [
                'json'
            ]
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3005,
            server: { baseDir: ['./'] }
        })
    ]
};