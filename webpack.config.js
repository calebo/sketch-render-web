var Autoprefixer = require('autoprefixer')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
var Webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query: { plugins: ['lodash'], presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract(
        'style-loader', 
        'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'
      ) },
      // { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.json$/, loader: "json" }
    ]
  },

  postcss: [ Autoprefixer({ browsers: ['last 2 versions'] }) ],

  plugins: process.env.NODE_ENV === 'production' ? [
    new LodashModuleReplacementPlugin,
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurrenceOrderPlugin(),
    new Webpack.optimize.UglifyJsPlugin()
  ] : [
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
    })
  ],  
};