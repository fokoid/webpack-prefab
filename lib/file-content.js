const contentProviders = {
  '.babelrc': './files/babelrc.js'
}

const fileContent = (file, props) => require(contentProviders[file])(props)

module.exports = fileContent
