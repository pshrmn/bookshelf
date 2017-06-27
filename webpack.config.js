const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './index.js',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'curi',
      'curi-react',
      'd3-scale'
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/index.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
      minChunks: Infinity
    })
  ]
};

switch(process.env.npm_lifecycle_event){
case 'start':
/*
  config.entry.bundle = [
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/only-dev-server',
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
      l.loaders = ['react-hot-loader', 'babel-loader'];
      delete l.loader;
    }
  });

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
  
  */
  break;
case 'build':
  config.module.rules.forEach(l => {
    if ( l.test.test('matches.scss') ) {
      l.use = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              minimize: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      });
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
  ]);
  break;
}

module.exports = config;
