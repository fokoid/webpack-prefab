const filename = 'webpack.common.js'

const plugins = ({genHTML}) => genHTML ? ['new CleanWebpackPlugin([dist])', 'new HtmlWebpackPlugin({

const content = ({
  entry = './src/index.js',
  output = '[name].bundle.js]',
  dist = 'dist',
  fileTypes = ['js'],
  genHTML = true

} = {}) => `
const CleanWebpackPlugin = require('clean-webpack-plugin'),
      HTMLWebpackPlugin = require('html-webpack-plugin')
const dist = '${dist}'

module.exports = {
  entry: {
    app: '${entry}'
  },
  output: {
    filename: '${output}',
    path: path.join(__dirname, dist)
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(jpg|png|gif|svg|tiff)$/, use: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    genHTML ? new HtmlWebpackPlugin({
      title: 'Split Webpack Boilerplate',
      inject: 'body'
    })
  ]
}`

module.exports = { filename, content }
