const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'development',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: path.resolve(__dirname, 'src/client/index.jsx'),
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    },{
      test: /.css$/,
      loader: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpg|gif|eot|ttf|woff|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },
  ]
  },
  devtool: 'source-map',
};