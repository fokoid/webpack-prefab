const single = require('./configs/single.js'),
      split = require('./configs/split.js')

const makeConfig = preset => {
  switch (preset) {
    case 'single':
      return single
    case 'split':
      return split
    default:
      return {}
  }
}
