const tapeTestCases = require('./tape-test-cases.js')

const {
  capitalizeFirstLetter,
  hyphenToCapitalCase,
  addTrailingSpaceIfNecessary
} = require('../lib/string-util.js')

tapeTestCases({
  description: 'capitalizeFirstLetter should capitalise the first letter of a given string',
  f: capitalizeFirstLetter,
  testCases: [
    { input: '', expected: '' },
    { input: 'a', expected: 'A' },
    { input: 'A', expected: 'A' },
    { input: '!a', expected: '!a' },
    { input: 'hello', expected: 'Hello' },
    { input : 'HELLO', expected: 'HELLO' },
    { input: ' hello', expected: ' hello' },
    { input: 'hi THERE!', expected: 'Hi THERE!' }
  ]
})

tapeTestCases({
  description: 'hyphenToCapitalCase should convert hyphen separated word lists to capital separated',
  f: hyphenToCapitalCase,
  testCases: [
    { input: 'html-webpack-plugin', expected: 'HtmlWebpackPlugin' },
    { input: 'Html-webpack_Plugin', expected: 'HtmlWebpack_Plugin' },
    { input: '-', expected: '' },
    { input: '---', expected: '' },
    { input: 'htmlwebpackplugin', expected: 'Htmlwebpackplugin' }
  ]
})

tapeTestCases({
  description: 'addTrailingSpaceIfNecessary should add a trailing space unless one exists already',
  f: addTrailingSpaceIfNecessary,
  testCases: [
    { input: '', expected: '' },
    { input: 'npm', expected: 'npm ' },
    { input: 'npm ', expected: 'npm ' },
    { input: 'npm  ', expected: 'npm  ' }
  ]
})
