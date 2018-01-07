const defaultPackages = new Set([
  '@babel/core',
])

class BabelRC {
  constructor({presets = new Set(['@babel/preset-env'])} = {}) {
    this.presets = new Set(presets)
  }

  get packages() {
    return new Set([...this.presets, ...defaultPackages])
  }

  get rc() {
    return { presets: [...this.presets].sort() }
  }

  get text() {
    return JSON.stringify(this.rc, null, 2)
  }
}

const babelrc = props => new BabelRC(props)

module.exports = babelrc
