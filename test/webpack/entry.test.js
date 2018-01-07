const tape = require('tape')
const entry = require('../../lib/webpack/entry.js')

tape('entry with no options should return sane defaults', t => {
  t.same(entry(), { app: [ 'babel-polyfill', './src/index.js' ] })
  t.end()
})

tape('entry with custom entry filename should return suitable entry point', t => {
  t.same(
    entry({ babel: false, index: './sources/app.ts' }),
    { app: [ './sources/app.ts' ] }
  )
  t.end()
})

tape('entry with custom bundle name should return suitable entry point', t => {
  t.same(
    entry({ babel: false, bundleName: 'application' }),
    { application: [ './src/index.js' ] }
  )
  t.end()
})

tape('entry with babel enabled should include babel polyfill first', t => {
  t.same(
    entry({ babel: true }).app[0],
    'babel-polyfill'
  )
  t.end()
})

tape('entry with additional entry points should return suitable entry point', t => {
  t.same(
    entry({ babel: false, extra: { app: [ './src/one.js', './src/two.js' ] } }),
    { app: [ './src/index.js', './src/one.js', './src/two.js' ] }
  )
  t.end()
})

tape('entry with additional entry point should return suitable list of entry points', t => {
  t.same(
    entry({ babel: false, extra: { vendor: [ './vendor/one.js', 'vendor-two' ] } }),
    { app: [ './src/index.js' ], vendor: [ './vendor/one.js', 'vendor-two' ] }
  )
  t.end()
})
