/* dependencies.js
 *
 * Takes a list of package dependencies and provides any of:
 *  - a list of `require`s for inclusion in a webpack configuration file
 *  - a yarn/npm installation command
 *  - a node in `package.json`
 */
const _ = require('lodash')
const {
  hyphenToCapitalCase,
  addTrailingSpaceIfNecessary
} = require('./string-util.js')

const packageImportNames = {
  'webpack': 'webpack',
  'webpack-merge': 'merge'
}

// Given a package name, e.g. `html-webpack-plugin` create a suitable import
// name, e.g. `HtmlWebpackPlugin`. Some packages have predefined names, such as
// `webpack-merge` being imported as just `merge`. Otherwise it just converts
// hyphen separated word lists into capitalized word lists.
const importName = packageName =>
  packageImportNames[packageName] || hyphenToCapitalCase(packageName)

const defaultPackages = [
  'webpack'
]

const sanitizePackages = packages => _.union(packages, defaultPackages)

const packageList = packages =>
  `"dependencies": [
${sanitizePackages(packages).map(package => `  "${package}"`).join(',\n')}
]`

const requireList = packages => sanitizePackages(packages)
  .map(file => `const ${importName(file)} = require('${file}')`)
  .join('\n')
  + `\n`

const installCommand = packageManager => {
  switch (packageManager) {
    case 'npm':
      return 'npm install '
    case 'yarn':
      return 'yarn add '
    default:
      return addTrailingSpaceIfNecessary(packageManager)
  }
}

const installList = (packages, packageManager = 'npm') =>
  installCommand(packageManager) + sanitizePackages(packages).join(' ')

module.exports = {
  importName,
  packageList,
  requireList,
  installList
}
