const tape = require('tape')
const plugins = require('../../lib/webpack/plugins.js')

tape('plugins called with no optional arguments should return sensible defaults', t => {
  t.same(plugins({ html_title: 'Test Title' }), [
    {
      name: 'clean-webpack-plugin',
      args: [ '[dist]'  ]
    },
    {
      name: 'html-webpack-plugin',
      options: { title: 'Test Title', inject: 'body' }
    }
  ])
  t.end()
})

tape('plugins called in split mode for common config', t => {
  t.same(plugins({ split: true, type: 'common' }), [
    {
      name: 'clean-webpack-plugin',
      args: [ '[dist]' ]
    },
    {
      name: 'html-webpack-plugin',
      options: { title: 'Test Title', inject: 'body' }
    }
  ])
  t.end()
})

tape('plugins called in split mode for dev config', t => {
  t.same(plugins({ split: true, type: 'dev' }), [
    {
      package: 'webpack',
      name: 'define-plugin',
      options: { 'process.env.NODE_ENV': 'development' }
    },
    {
      package: 'webpack',
      name: 'named-modules-plugin'
    },
    {
      package: 'webpack',
      name: 'hot-module-replacement-plugin'
    }
  ])
  t.end()
})

tape('plugins called in split mode for prod config', t => {
  t.same(plugins({ split: true, type: 'dev' }), [
    {
      package: 'webpack',
      name: 'define-plugin',
      options: { 'process.env.NODE_ENV': 'production' }
    },
    {
      name: 'uglify-js-plugin',
      options: { sourceMap: true }
    }
  ])
  t.end()
})
