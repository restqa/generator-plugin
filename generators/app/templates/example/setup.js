const {
  After, AfterAll, Before, BeforeAll,
  Given, When, Then,
  defineParameterType,
  setWorldConstructor
} = require('cucumber')

const <%= pkgCapitalizedNameNoSpace %> = require('../src/<%= pkgSlugName %>')

const config = {
  name: 'local',
  data: {
    startSymbol: '{[',
    endSymbol: ']}'
  },
  title: 'my example title'
}

const instance = new <%= pkgCapitalizedNameNoSpace %>(config)

instance.setParameterType(defineParameterType)
instance.setSteps({ Given, When, Then })
instance.setHooks({ Before, BeforeAll, After, AfterAll })

setWorldConstructor(instance.getWorld())
