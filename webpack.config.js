module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  externals: {
    "chrome": "chrome",
    "react": "React",
    "react-dom": "ReactDOM",
    "d3": "d3"
  },
  output: {
    path: __dirname + "/forager/",
    filename: "build/index.js",
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
