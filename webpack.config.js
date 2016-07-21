const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './index.js',
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
      }
    ]
  },
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
  // replace the js(x) loader to include the react-hot loader
  config.module.loaders = [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }
  ];
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
