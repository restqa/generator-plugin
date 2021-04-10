const Given = require('../1-given/handlers')
const When = require('./handlers')

describe('Then handlers', () => {
  describe('addition', () => {
    const World = require('../../world.js')
    let $this
    beforeEach(() => {
      $this = new World({})
      Given.calculator.call($this)
    })
    test('Throw an error if the caculator hasn\'t been created before', () => {
      $this = {}
      expect(() => {
        When.addition.call($this, 3, 3)
      }).toThrow(new Error('Please create the calculator before using the addition. Use the step definition "Given I have a calculator"'))
    })

    test('Throw an error if the first number is not a number', () => {
      expect(() => {
        Given.calculator.call($this)
        When.addition.call($this, 'hello', 3)
      }).toThrow(new TypeError('The first number should be a number but received: hello <string>'))
    })

    test('Throw an error if the second number is not a number', () => {
      expect(() => {
        Given.calculator.call($this)
        When.addition.call($this, 45, 'hello')
      }).toThrow(new TypeError('The second number should be a number but received: hello <string>'))
    })

    test('Do not throw an error when Create a addition', () => {
      Given.calculator.call($this)
      expect(() => {
        When.addition.call($this, 3, 3)
      }).not.toThrow()
    })
  })
})
