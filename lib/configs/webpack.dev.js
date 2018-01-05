const webpack = require('webpack')
const merge = require('webpack-merge').strategy({ entry: 'prepend' })
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    app: [ 'react-hot-loader/patch' ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: common.output.path,
    compress: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
