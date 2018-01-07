const appEntry = ({
  index = './src/index.js',
  babel = true,
  bundleName,
  extra} = {}
) => (babel ? [ 'babel-polyfill' ] : [])
  .concat([ index ])
  .concat(extra[bundleName] || [])

const entry = ({extra = {}, bundleName = 'app', ...props} = {}) =>
  ({
    ...extra,
    [bundleName]: appEntry({...props, bundleName, extra})
  })

module.exports = entry
