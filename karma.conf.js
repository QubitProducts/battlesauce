var path = require('path')
var webpack = require('webpack')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [ path.join(__dirname, 'index.js') ],
    preprocessors: {
      '*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      watch: true,
      devtool: 'inline-source-map',
      plugins: [
        new webpack.DefinePlugin({
          __BATTLETEST__: JSON.stringify(require(process.env.BATTLETEST_SPEC))
        })
      ]
    },
    webpackServer: {
      quiet: true,
      noInfo: true
    },
    browsers: ['Chrome'],
    reporters: ['spec'],
    singleRun: true
  })
}
