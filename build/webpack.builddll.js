const webpack = require('webpack');
const path = require('path')
const vendors = [
    "react",
    "react-container-query",
    "react-document-title",
    "react-dom",
    "@antv/data-set",
    "@babel/polyfill",
    "antd",
    "bizcharts",
    "bizcharts-plugin-slider",
    "classnames",
    "dva",
    "dva-loading",
    "enquire-js",
    "lodash",
    "lodash-decorators",
    "moment",
    "numeral",
    "omit.js",
    "path-to-regexp",
    "prop-types",
    "qs",
    "rc-drawer-menu",
    "react-fittext",
    "rollbar",
    "url-polyfill"

    // ...其它库
];

module.exports = {
    output: {
        path: path.join(__dirname, '../static/js'),
        filename: '[name].dll.js',
        library: '[name]_library' 
    },
    entry: {
        "vendor": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ],
};
