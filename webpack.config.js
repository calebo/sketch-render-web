var webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract(
      //   'style-loader', 
      //   'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'
      // ) },
      // { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.json$/, loader: "json" }
    ]
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],  
};