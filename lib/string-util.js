const capitalizeFirstLetter = string => {
  if (string.length === 0) return string
  const [firstLetter, ...rest ] = string
  return firstLetter.toUpperCase() + rest.join('')
}

const hyphenToCapitalCase = sentence => sentence
  .split('-')
  .map(capitalizeFirstLetter)
  .join('')

const addTrailingSpaceIfNecessary = str => {
  if (str === '' || str.slice(-1) === ' ') return str
  return str + ' '
}

module.exports = {
  capitalizeFirstLetter,
  hyphenToCapitalCase,
  addTrailingSpaceIfNecessary
}
