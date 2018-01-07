const tape = require('tape')
const loaders = require('../../lib/webpack/loaders.js')

tape('loaders called with no options should return sane defaults', t => {
  t.same(
    loaders(),
    [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(jpg|png|gif|svg|tiff|ico)$/, use: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  )
  t.end()
})


tape('loaders called with react enabled should handle JSX', t => {
  t.same(
    loaders({react: true})
    .filter(({use}) => use === 'babel-loader')[0]
    .test.toString(),
    /\.jsx?$/.toString()
  )
  t.end()
})

tape('loaders should be empty if fonts, images, styles and babel are disabled', t => {
  t.same(
    loaders({ images: false, fonts: false, styles: false, babel: false }),
    []
  )
  t.end()
})

tape('if react is enabled, babel: false should be ignored', t => {
  t.same(
    loaders({ babel: false, react: true })
    .filter(({use}) => use === 'babel-loader')
    .length,
    1
  )
  t.end()
})
