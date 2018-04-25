var webpack = require('webpack');
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
module.exports = (config, env) => {
    config.plugins = config.plugins.concat([
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname),
            manifest: require('./build/vendor-manifest.json')
        }),
        // new HtmlWebpackIncludeAssetsPlugin({
        //     assets: ['./static/js/vendor.dll.js'],
        //     files: ['./src/index.ejs'],
        //     append: false,
        //     hash: true
        // }),
        new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, './static'),
              to: '../dist',
              ignore: ['.*']
            }
        ]),
    ])
    return config;
}