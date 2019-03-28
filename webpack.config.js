const debug = process.env.NODE.ENV !== 'production'
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/scripts.js',
  output: {
    path: __dirname + '/js',
    filename: 'scripts.nim.js'
  },
  plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
      ]
}
