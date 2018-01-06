const tape = require('tape')

const tapeTestCases = ({description, f, testCases}) => tape(
  description,
  t => {
    testCases.forEach(({input, inputs, expected}) => {
      if (Array.isArray(inputs))
        t.same(f(...inputs), expected)
      else
        t.same(f(input), expected)
    })
    t.end()
  }
)

module.exports = tapeTestCases
