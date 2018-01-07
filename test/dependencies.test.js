const tape = require('tape')
const tapeTestCases = require('./tape-test-cases.js')
const {
  importName,
  packageList,
  installList,
  requireList
} = require('../lib/dependencies.js')

tapeTestCases({
  description: 'importName should give a suitable name for the imported object',
  f: importName,
  testCases: [
    { input: 'webpack', expected: 'webpack' },
    { input: 'webpack-merge', expected: 'merge' },
    { input: 'html-webpack-plugin', expected: 'HtmlWebpackPlugin' },
    { input: 'clean-webpack-plugin', expected: 'CleanWebpackPlugin' }
  ]
})

tapeTestCases({
  description: 'packageList should give a suitable JSON string of packages',
  f: packageList,
  testCases: [
    { input: [], expected: `"dependencies": [
  "webpack"
]` },
    {
      input: [ 'html-webpack-plugin', 'webpack', 'webpack-merge' ],
      expected: `"dependencies": [
  "html-webpack-plugin",
  "webpack",
  "webpack-merge"
]`
    }
  ]
})

tapeTestCases({
  description: 'installList should give a suitable package installation command',
  f: installList,
  testCases: [
    { input: [], expected: 'npm install webpack' },
    {
      input: [ 'html-webpack-plugin', 'webpack', 'webpack-merge' ],
      expected: 'npm install html-webpack-plugin webpack webpack-merge'
    },
    { inputs: [ ['webpack'], 'yarn' ], expected: 'yarn add webpack' },
    {
      inputs: [ ['webpack'], 'made_up_package_installer inst' ],
      expected: 'made_up_package_installer inst webpack'
    },
    { inputs: [ ['webpack'], '' ], expected: 'webpack' }
  ]
})

tapeTestCases({
  description: 'requireList should give a suitable list of JavaScript require calls',
  f: requireList,
  testCases: [
    { input: [], expected: `const webpack = require('webpack')\n` },
    {
      input: [ 'html-webpack-plugin', 'webpack', 'webpack-merge' ],
      expected:
`const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
`
    }
  ]
})
