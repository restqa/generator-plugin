module.exports = function (config, { Before, BeforeAll, After, AfterAll }) {
  Before(function () {
    this.setConfig(config)
  })

  Before('@skip', function () {
    this.skipped = true
    return 'skipped'
  })

  Before('@wip', function () {
    this.skipped = true
    return 'skipped'
  })

  After(function (scenario) {
    this.log = this.log || console.log
  })
}
