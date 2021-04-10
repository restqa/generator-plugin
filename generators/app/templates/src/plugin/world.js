const { World } = require('@restqa/restqa-plugin-bootstrap')

class PluginWorld extends World {
  setup () {
    this.createCalculator = () => {
      let result = null
      const options = {
        config: this._config
      }

      return {
        getTitle: () => {
          return options.config.title
        },
        add: (val1, val2) => {
          if (isNaN(val1)) throw new TypeError(`The first number should be a number but received: ${val1} <${typeof val1}>`)
          if (isNaN(val2)) throw new TypeError(`The second number should be a number but received: ${val2} <${typeof val2}>`)
          result = val1 + val2
        },
        getResult: () => result
      }
    }
  }
}

module.exports = PluginWorld
