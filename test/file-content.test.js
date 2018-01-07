const tape = require('tape')
const fileContent = require('../lib/file-content.js')

const options = {
  split: true,
  packageFile: true
}

tape('fileContent should return default .babelrc if no options are passed', t => {
  t.same(fileContent('.babelrc'), require('../lib/files/babelrc.js')())
  t.end()
})

tape('fileContent should return default .babelrc if no relevant options are passed', t => {
  t.same(
    fileContent('.babelrc', { split: true, packageFile: true }),
    require('../lib/files/babelrc.js')()
  )
  t.end()
})

/*tape('fileContent should return default webpack config if no options are passed', t => {
  t.same(
    fileContent('webpack.config.js'),
    require('../lib/files/webpack.config.js')()
  )
})*/
