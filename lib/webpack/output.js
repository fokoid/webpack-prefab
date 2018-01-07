const output = ({ bundleFilename = '[name].bundle.js' } = {}) => ({
  filename: bundleFilename,
  path: 'path.resolve(__dirname, dist)'
})

module.exports = output
