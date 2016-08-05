var karmaConfig = require('./karma.conf')
var customLaunchers = {
  sl_chrome: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 10'
  },
  sl_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox'
  },
  sl_safari: {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.11'
  },
  sl_ie: {
    base: 'SauceLabs',
    browserName: 'internet explorer'
  },
  sl_ie_9: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '9'
  },
  sl_ios_safari: {
    base: 'SauceLabs',
    browserName: 'Safari',
    platform: 'iOS',
    version: '9.1',
    device: 'iPhone 6'
  },
  sl_android_browser: {
    base: 'SauceLabs',
    browserName: 'android',
    version: 'latest'
  }
}

module.exports = function (config) {
  karmaConfig({
    set: function setter (baseConfig) {
      config.set(sauceConfig(baseConfig))
    }
  })
}

function sauceConfig (baseConfig) {
  return Object.assign({}, baseConfig, {
    sauceLabs: { testName: 'battletesting' },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['progress', 'saucelabs']
  })
}
