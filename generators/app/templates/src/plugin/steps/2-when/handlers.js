const When = {}

When.addition = function (val1, val2) {
  if (Object.prototype.hasOwnProperty.call(this, 'calculator') === false) {
    throw new Error('Please create the calculator before using the addition. Use the step definition "Given I have a calculator"')
  }

  this.calculator.add(val1, val2)
}

module.exports = When
