const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-restqa-plugin:app', () => {
  test('create files', () => {
    const pluginName = 'my-plugin-name'

    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ pluginName })
      .then(() => {
        assert.file([
          'README.md',
          `src/${pluginName}/index.js`,
          `src/${pluginName}/hooks.js`,
          `src/${pluginName}/world.js`,
          `src/${pluginName}/steps/index.js`,
          `src/${pluginName}/steps/1-given/index.js`,
          `src/${pluginName}/steps/1-given/index.test.js`,
          `src/${pluginName}/steps/1-given/handlers.js`,
          `src/${pluginName}/steps/1-given/handlers.test.js`,
          `src/${pluginName}/steps/2-when/index.js`,
          `src/${pluginName}/steps/2-when/index.test.js`,
          `src/${pluginName}/steps/2-when/handlers.js`,
          `src/${pluginName}/steps/2-when/handlers.test.js`,
          `src/${pluginName}/steps/3-then/index.js`,
          `src/${pluginName}/steps/3-then/index.test.js`,
          `src/${pluginName}/steps/3-then/handlers.js`,
          `src/${pluginName}/steps/3-then/handlers.test.js`,
          `example/feature/${pluginName}.feature`,
          'example/setup.js',
          'docs/support/header.hbs',
          'docs/support/scope.hbs'
        ])
      })
  })
})
