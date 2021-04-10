const {
  After, AfterAll, Before, BeforeAll,
  Given, When, Then,
  defineParameterType,
  setWorldConstructor
} = require('cucumber')

const <%= pluginName %> = require('../src/<%= pluginName %>')

const config = {
  name: 'local',
  data: {
    startSymbol: '{[',
    endSymbol: ']}'
  },
  title: 'my example title'
}

const instance = new <%= pluginName %>(config)

instance.setParameterType(defineParameterType)
instance.setSteps({ Given, When, Then })
instance.setHooks({ Before, BeforeAll, After, AfterAll })

setWorldConstructor(instance.getWorld())
