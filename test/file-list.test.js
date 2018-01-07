const tape = require('tape')
const fileList = require('../lib/file-list.js')

tape('default configuration should yield webpack, babel and package configuration', t => {
  t.same(fileList(), ['webpack.config.js', '.babelrc', 'package-install.sh'])
  t.end()
})

tape('split configuration should return split webpack, plus babel and package config', t => {
  t.same(
    fileList({ split: true }), [
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js',
      '.babelrc',
      'package-install.sh'
    ]
  )
  t.end()
})

tape('package.json should replace package-install.sh if requested', t => {
  t.same(
    fileList({ packageFile: true }), [ 'webpack.config.js', '.babelrc', 'package.json' ]
  )
  t.same(
    fileList({ split: true, packageFile: true }), [
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js',
      '.babelrc',
      'package.json'
    ]
  )
  t.end()
})
