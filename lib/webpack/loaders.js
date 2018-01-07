const mediaLoaders = ({styles = true, images = true, fonts = true} = {})  => [
  styles && { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
  images && { test: /\.(jpg|png|gif|svg|tiff|ico)$/, use: 'file-loader' },
  fonts && { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
].filter(x => x !== false)

const jsLoaders = ({babel = true, react = false} = {}) => {
  // if react is enabled, force babel on
  babel = babel || react
  // if babel is still disabled, we don't need a JS loader
  if (!babel) return []

  return [{
    test: react ? /\.jsx?$/ : /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  }]
}

const loaders = props => jsLoaders(props).concat(mediaLoaders(props))

module.exports = loaders
