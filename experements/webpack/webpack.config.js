'use strict';

const webpak      = require('webpack');
const path        = require('path');
const NODE_ENV    = process.env.NODE_ENV || 'development';

module.exports = {
  context: __dirname + "/",
  entry: "./main",
  output: {
      path: __dirname + "/bundle",
      publicPath: __dirname +  '/bundle/',
      filename: "bundle.js"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: true
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

  plugins: [
    new webpak.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  module: {
    loaders: [{
      exclude: /\/node_modules\//,
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: [
          ['transform-runtime'],
          ["transform-decorators-legacy"],
        ]
      }
    }],

    noParse: [/underscore.js/, /jquery.js/],
  },


  resolve: {
    modulesDirectories: [
      path.join(__dirname, '../../node_modules')
    ],
    extentions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: [
      path.join(__dirname, '../../node_modules')
    ],
    moduleTemplates: ['*-loader', '*'],
    extentions: ['', '.js']
  },
}

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpak.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      },
      output: {
        comments: false
      }
    })
  )
}