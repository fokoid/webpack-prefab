const tape = require('tape')
const output = require('../../lib/webpack/output.js')

tape('output called with no arguments should return a sane default', t => {
  t.same(output(), {
    filename: '[name].bundle.js',
    path: 'path.resolve(__dirname, dist)'
  })
  t.end()
})

tape('output called with custom bundle name', t => {
  t.equal(output({ bundleFilename: 'app.js' }).filename, 'app.js')
  t.end()
})
