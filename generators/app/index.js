const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const s = require('underscore.string')
const path = require('path')

module.exports = class extends Generator {
  prompting () {
    this.log(
      yosay(
        `Welcome to the RestQA Community, let me help you to generate your first ${chalk.red(
          'Restqa Plugin'
        )}`
      )
    )

    const prompts = [
      {
        name: 'pkgName',
        message: 'What is the RestQA Plugin name ?',
        default: path.basename(process.cwd())
      },
      {
        name: 'pkgDescription',
        message: 'What\'s your RestQA Plugin all about?',
        default: 'An awesome RestQA Plugin.'
      },
      {
        name: 'pkgVersion',
        message: 'What\'s the Plugin version?',
        default: '0.1.0'
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Continue?',
        default: false
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
      this.props.pkgSlugName = s.slugify(this.props.pkgName)
      this.props.pkgCapitalizedName = s.capitalize(this.props.pkgName)
      this.props.pkgCapitalizedNameNoSpace = this.props.pkgCapitalizedName.replace(/ /g, '')
      if (!this.props.confirm) {
        return process.exit(0)
      }
    })
  }

  writing () {
    [
      'src/plugin/index.js',
      'src/plugin/hooks.js',
      'src/plugin/world.js',
      'src/plugin/steps/index.js',
      'src/plugin/steps/1-given/index.js',
      'src/plugin/steps/1-given/index.test.js',
      'src/plugin/steps/1-given/handlers.js',
      'src/plugin/steps/1-given/handlers.test.js',
      'src/plugin/steps/2-when/index.js',
      'src/plugin/steps/2-when/index.test.js',
      'src/plugin/steps/2-when/handlers.js',
      'src/plugin/steps/2-when/handlers.test.js',
      'src/plugin/steps/3-then/index.js',
      'src/plugin/steps/3-then/index.test.js',
      'src/plugin/steps/3-then/handlers.js',
      'src/plugin/steps/3-then/handlers.test.js',
      'example/feature/plugin.feature',
      'example/setup.js',
      'docs/support/header.hbs',
      'docs/support/scope.hbs'
    ].forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file.replace('plugin', this.props.pkgSlugName)),
        this.props
      )
    })

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      this.props
    )

    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    )

    const pkgJson = {
      name: this.props.pkgSlugName,
      main: `src/${this.props.pkgSlugName}/index.js`,
      description: this.props.pkgDescription,
      version: this.props.pkgVersion,
      keywords: [
        'test automation',
        'restqa',
        'testing',
        'cucumber'
      ],
      scripts: {
        pretest: 'npm run doc',
        doc: `jsdoc2md  --partial docs/support/scope.hbs --partial docs/support/header.hbs --files src/${this.props.pkgSlugName}/steps/**/index.js > docs/steps-catalog.md`,
        example: 'cucumber-js --require ./example/setup.js ./example/',
        test: 'jest',
        'test:watch': 'jest --watch --coverage'
      },
      devDependencies: {
        eslint: '^7.20.0',
        jest: '^26.6.3',
        'jest-runner-eslint': '^0.10.0',
        'jsdoc-to-markdown': '^6.0.1'
      },
      dependencies: {
        '@restqa/restqa-plugin-bootstrap': '0.0.4',
        cucumber: '^6.0.5'
      },
      eslintConfig: {
        parserOptions: {
          ecmaVersion: 2017
        }
      },
      jest: {
        projects: [
          {
            displayName: 'test'
          },
          {
            runner: 'jest-runner-eslint',
            displayName: 'lint',
            testMatch: [
              '<rootDir>/src/**/*.js'
            ]
          }
        ]
      }
    }

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson)
  }

  install () {
    this.npmInstall()
  }
}
