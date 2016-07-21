const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: ['sass/index.scss', './index.js'],
    vendor: ['react', 'react-dom']
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'src')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }
    ]
  },
  postcss: () => [autoprefixer],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
      minChunks: Infinity
    })
  ]
};

switch(process.env.npm_lifecycle_event){
case 'start':
  config.entry.bundle = [
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/only-dev-server',
    'sass/index.scss',
    './index.js'
  ]
  // I am unsure of the best way to do this. Hard-coding
  // will break if another loader is placed at the index
  // that the jsx loader currently is. Replacing all of 
  // the loaders seems cumbersome. This is ugly and having
  // multiple loaders that match the file could cause issues
  // (but there shouldn't be multiple loaders matching the
  // test pattern).
  config.module.loaders.forEach(l => {
    if ( l.test.test('matches.jsx') ) {
      l.loaders = ['react-hot', 'babel'];
      delete l.loader;
    }
  });

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
  
  break;
case 'build':
  // same idea as the jsx loader above
  config.module.loaders.forEach(l => {
    if ( l.test.test('matches.scss') ) {
      l.loader = ExtractTextPlugin.extract('style', 'css!postcss!sass');
      delete l.loaders;
    }
  });

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/index.css')
  ]);
  break;
}

module.exports = config;
