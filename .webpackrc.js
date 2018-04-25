const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    // ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  ignoreMomentLocale: true,
  
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
  "define": {
    "process.env.NODE_ENV": process.env.NODE_ENV,
    "process.env.API_ENV": process.env.API_ENV
  },
  // externals: {
  //   "react": "window.React",
  //   "react-dom": "window.ReactDOM",
  //   "antd": "window.antd",
  //   "lodash": "window.lodash",
  //   "react-router": "window.ReactRouter",
  //   "moment": "window.moment"
  // },
};
