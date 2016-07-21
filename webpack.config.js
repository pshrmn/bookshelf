const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

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
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/public/js/'
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
      filename: 'vendor.js',
      minChunks: Infinity
    })
  ]
};

switch(process.env.npm_lifecycle_event){
case 'start':
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
  config.entry.bundle = [
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/only-dev-server',
    './index.js'
  ]
  // find the js(x) loader and add the react-hot-loader
  // I am unsure of the best way to do this. Hard-coding
  // will break if another loader is placed at the index
  // that the jsx loader currently is. Replacing all of 
  // the loaders seems cumbersome. This is ugly and having
  // multiple loaders that match the file could cause issues
  // (but there shouldn't be multiple loaders matching the
  // test pattern).
  config.module.loaders.forEach(l => {
    if ( l.test.test('matches.jsx') ) {
      l.loaders = ['react-hot', 'babel']
      delete l.loader;
    }
  });
  config.module.loaders[0].loaders = ['react-hot', 'babel'];
case 'webpack-prod':
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
    })
  ]);
}

module.exports = config;
