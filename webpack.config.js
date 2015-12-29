module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "d3": "d3"
  },
  output: {
    path: __dirname + "/public/js",
    filename: "./bundle.js",
  },
  module: {
    loaders: [
     {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
