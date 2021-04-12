const Given = require('../1-given/handlers')
const When = require('../2-when/handlers')
const Then = require('./handlers')

describe('Then handlers', () => {
  describe('checkResult', () => {
    const World = require('../../world.js')
    let $this
    beforeEach(() => {
      $this = new World({})
      Given.calculator.call($this)
    })

    test('Throw error if the expected result is not a number', () => {
      const $this = {
        data: {
          get: _ => _
        },
        calculator: {
          getResult: () => '4'
        }
      }
      expect(() => {
        Then.checkResult.call($this, 4)
      }).toThrow(new Error('The expected result is 4, but received: 4 <string>'))
    })

    test('Throw error if the expected result is a number but not the right result', () => {
      $this._data = {
        get: _ => _
      }
      When.addition.call($this, 3, 2) // equal to 4
      expect(() => {
        Then.checkResult.call($this, 4)
      }).toThrow(new Error('The expected result is 4, but received: 5 <number>'))
    })

    test('Throw error if the expected result is a float but not a no the right result', () => {
      $this._data = {
        get: _ => _
      }
      When.addition.call($this, 3.5, 2) // equal to 5.5
      expect(() => {
        Then.checkResult.call($this, 4.5)
      }).toThrow(new Error('The expected result is 4.5, but received: 5.5 <number>'))
    })

    test('Do not throw an error if the result match', () => {
      $this._data = {
        get: _ => _
      }
      When.addition.call($this, 5, 5) // equal to 10
      expect(() => {
        Then.checkResult.call($this, 10)
      }).not.toThrow()
    })

    test('Do not throw an error but get the expected result from the dataset', () => {
      $this._data = {
        get: jest.fn().mockReturnValue(10)
      }
      When.addition.call($this, 5, 5) // equal to 10
      expect(() => {
        Then.checkResult.call($this, 'my-result')
      }).not.toThrow()
      expect($this.data.get.mock.calls).toHaveLength(1)
      expect($this.data.get.mock.calls[0][0]).toBe('my-result')
    })
  })
})
