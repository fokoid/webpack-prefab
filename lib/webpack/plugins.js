const defaultPlugins = [{
  single: [ 'clean-webpack-plugin', 'html-webpack-plugin'],
  common: defaultPlugins.single,
  dev: [ '
]

const plugins = ({ split = false } = {}) => {
  const packages = []
  if (!split)
    packages.concat(defaultPlugins)
}
module.exports = plugins
