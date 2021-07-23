const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-restqa-plugin:app', () => {
  test('create files with default value', () => {
    return helpers
      .run(__dirname)
      .withPrompts({ confirm: true })
      .then((dir) => {
        const pluginSlugName = path.basename(dir)
        assert.file([
          'README.md',
          `src/${pluginSlugName}/index.js`,
          `src/${pluginSlugName}/hooks.js`,
          `src/${pluginSlugName}/world.js`,
          `src/${pluginSlugName}/steps/index.js`,
          `src/${pluginSlugName}/steps/1-given/index.js`,
          `src/${pluginSlugName}/steps/1-given/index.test.js`,
          `src/${pluginSlugName}/steps/1-given/handlers.js`,
          `src/${pluginSlugName}/steps/1-given/handlers.test.js`,
          `src/${pluginSlugName}/steps/2-when/index.js`,
          `src/${pluginSlugName}/steps/2-when/index.test.js`,
          `src/${pluginSlugName}/steps/2-when/handlers.js`,
          `src/${pluginSlugName}/steps/2-when/handlers.test.js`,
          `src/${pluginSlugName}/steps/3-then/index.js`,
          `src/${pluginSlugName}/steps/3-then/index.test.js`,
          `src/${pluginSlugName}/steps/3-then/handlers.js`,
          `src/${pluginSlugName}/steps/3-then/handlers.test.js`,
          `example/feature/${pluginSlugName}.feature`,
          'example/setup.js',
          'docs/support/header.hbs',
          'docs/support/scope.hbs',
          '.gitignore',
          '.eslint.yml',
          '.github/workflows/build.yml'
        ])

        const pkgPackageJson = require(path.resolve(dir, 'package.json'))
        expect(pkgPackageJson.name).toBe(pluginSlugName)
        expect(pkgPackageJson.description).toBe('An awesome RestQA Plugin.')
        expect(pkgPackageJson.version).toBe('0.1.0')
      })
  })

  test('create files with passed value', () => {
    return helpers
      .run(__dirname)
      .withPrompts({
        pkgName: 'example',
        pkgDescription: 'This is it',
        pkgVersion: '0.0.1',
        confirm: true
      })
      .then((dir) => {
        assert.file([
          'README.md',
          'src/example/index.js',
          'src/example/hooks.js',
          'src/example/world.js',
          'src/example/steps/index.js',
          'src/example/steps/1-given/index.js',
          'src/example/steps/1-given/index.test.js',
          'src/example/steps/1-given/handlers.js',
          'src/example/steps/1-given/handlers.test.js',
          'src/example/steps/2-when/index.js',
          'src/example/steps/2-when/index.test.js',
          'src/example/steps/2-when/handlers.js',
          'src/example/steps/2-when/handlers.test.js',
          'src/example/steps/3-then/index.js',
          'src/example/steps/3-then/index.test.js',
          'src/example/steps/3-then/handlers.js',
          'src/example/steps/3-then/handlers.test.js',
          'example/feature/example.feature',
          'example/setup.js',
          'docs/support/header.hbs',
          'docs/support/scope.hbs',
          '.gitignore',
          '.eslint.yml',
          '.github/workflows/build.yml'
        ])

        const pkgPackageJson = require(path.resolve(dir, 'package.json'))
        expect(pkgPackageJson.name).toBe('example')
        expect(pkgPackageJson.description).toBe('This is it')
        expect(pkgPackageJson.version).toBe('0.0.1')
      })
  })

  test('create files with passed value but the plugin name has a space', () => {
    return helpers
      .run(__dirname)
      .withPrompts({
        pkgName: 'example plugin',
        pkgDescription: 'This is it',
        pkgVersion: '0.0.1',
        confirm: true
      })
      .then((dir) => {
        assert.file([
          'README.md',
          'src/example-plugin/index.js',
          'src/example-plugin/hooks.js',
          'src/example-plugin/world.js',
          'src/example-plugin/steps/index.js',
          'src/example-plugin/steps/1-given/index.js',
          'src/example-plugin/steps/1-given/index.test.js',
          'src/example-plugin/steps/1-given/handlers.js',
          'src/example-plugin/steps/1-given/handlers.test.js',
          'src/example-plugin/steps/2-when/index.js',
          'src/example-plugin/steps/2-when/index.test.js',
          'src/example-plugin/steps/2-when/handlers.js',
          'src/example-plugin/steps/2-when/handlers.test.js',
          'src/example-plugin/steps/3-then/index.js',
          'src/example-plugin/steps/3-then/index.test.js',
          'src/example-plugin/steps/3-then/handlers.js',
          'src/example-plugin/steps/3-then/handlers.test.js',
          'example/feature/example-plugin.feature',
          'example/setup.js',
          'docs/support/header.hbs',
          'docs/support/scope.hbs',
          '.gitignore',
          '.eslint.yml',
          '.github/workflows/build.yml'
        ])

        const pkgPackageJson = require(path.resolve(dir, 'package.json'))
        expect(pkgPackageJson.name).toBe('example-plugin')
        expect(pkgPackageJson.description).toBe('This is it')
        expect(pkgPackageJson.version).toBe('0.0.1')
      })
  })
})
