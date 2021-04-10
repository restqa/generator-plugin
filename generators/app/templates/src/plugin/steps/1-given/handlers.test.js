const Given = require('./handlers')

describe('Given handlers', () => {
  describe('calculator', () => {
    test('Create an instance of calculator', () => {
      const World = require('../../world.js')
      const $this = new World({})
      Given.calculator.call($this)
      expect($this).toHaveProperty('calculator')
    })
  })
})
