'use strict';

const webpak              = require('webpack');
const path                = require('path');
const AssetsPlugin        = require('assets-webpack-plugin');
const NODE_ENV            = process.env.NODE_ENV || 'development';

function addHash(template, hash) {
  return NODE_ENV == 'production' ?
    template.replace(/\.[^.]+$/, `.[${hash}]$&`): `${template}?hash[${hash}]`;
}


module.exports = {
  context: path.resolve(__dirname, ''),

  entry: "./mvc/app",

  output: {
    path: path.resolve(__dirname, 'build'),

    filename: addHash('bundle.js', 'chunkhash')
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

  plugins: [
    new webpak.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),

    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, '..', '..', '..', 'views', 'accountPage')
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
          // ['transform-runtime'],
          ["transform-decorators-legacy"],
        ]
      }
    }],

    noParse: [/underscore.js/, /jquery.js/],
  },

  resolve: {
    modulesDirectories: [
      path.join(__dirname, '..', '..', '..', 'node_modules')
    ],
    extentions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: [
      path.join(__dirname, '..', '..', '..', 'node_modules')
    ],
    moduleTemplates: ['*-loader', '*'],
    extentions: ['', '.js']
  },
}

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpak.optimize.UglifyJsPlugin({
      compress: {
        warnings:     false,
        drop_console: true,
        unsafe:       true
      },
      output: {
        comments: false
      }
    })
  )
}
