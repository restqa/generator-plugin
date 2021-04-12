# <%= pkgCapitalizedName %>

> <%= pkgDescription %>

## Getting Started

Change this template to create your own module.

## Using the plugin with RestQA

Coming Soon!

## Using the plugin with CucumberJs

### Requirements

 * Node.js >= 12
 * Cucumber >= 6.0.5

### Installation

Using npm:

```
npm install <%= pkgSlugName %> cucumber
```

Using yarn:

```
yarn add <%= pkgSlugName %> cucumber
```

Then you will need to create or update your world.js file:

```
//support/world.js

const {
  After, AfterAll, Before, BeforeAll,
  Given, When, Then,
  defineParameterType,
  setWorldConstructor
} = require('cucumber')

const <%= pkgCapitalizedNameNoSpace %> = require('<%= pkgSlugName %>')

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
```

Run your Spec

```
./node_modules/.bin/cucumber-js
```

## Getting To Know RestQA 🦏

[RestQA](https://restqa.io) is an Open Source Test Automation Framework.

> "With Great Power Comes Great Responsibility"

Gherkin is a powerful language if we understand it. RestQA helps anyone to master this power!


## Developement Setting

Run the example

```
$ npm run example
```

Generating the documentation: 

```
$ npm run doc
```

Run Unit test:

```
$ npm test
```

Style check:

```
$ npm run lint
```


## Contributing

Contributions are very welcome! If you'd like to contribute
