const tape = require('tape')
const babelrc = require('../lib/babelrc.js')

tape('default babelrc should require babel core and env preset', t => {
  t.same(babelrc().packages, new Set([ '@babel/core', '@babel/preset-env']))
  t.end()
})

tape('default babelrc should use env preset', t => {
  t.same(babelrc().rc, { presets: [ '@babel/preset-env' ] })
  t.end()
})

tape('default babelrc should return correctly formatted JSON string', t => {
  t.equal(babelrc().text,
`{
  "presets": [
    "@babel/preset-env"
  ]
}`
  )
  t.end()
})

tape('babelrc with custom presets should provide an appropriate package list', t => {
  t.same(
    babelrc({ presets: [ 'react', 'env', 'stage-2' ]}).packages,
    new Set([
      '@babel/core',
      '@babel/preset-env',
      '@babel/preset-stage-2',
      '@babel/preset-react'
    ])
  )
  t.end()
})

tape('babelrc with custom presets should return a suitable config object', t => {
  t.same(
    babelrc({ presets: [
      '@babel/preset-react',
      '@babel/preset-env',
      '@babel/preset-stage-2' ]}
    ).rc,
    {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-stage-2'
      ]
    }
  )
  t.end()
})
