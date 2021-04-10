const assert = require('assert')
const Then = {}

Then.checkResult = function (expectedValue) {
  expectedValue = this.data.get(expectedValue)
  const value = this.calculator.getResult()
  assert.strictEqual(expectedValue, value, `The expected result is ${expectedValue}, but received: ${value} <${typeof value}>`)
}

module.exports = Then
