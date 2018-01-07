const otherFiles = ({ packageFile }) => [
  '.babelrc',
  packageFile ? 'package.json' : 'package-install.sh'
]

const webpackFiles = ({split, ...props}) => {
  if (split)
    return [
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js'
    ]
  return [
    'webpack.config.js'
  ]
}

const fileList = ({split = false, packageFile = false, ...props} = {}) => [
  ...webpackFiles({split, ...props}),
  ...otherFiles({packageFile, ...props})
]

module.exports = fileList
