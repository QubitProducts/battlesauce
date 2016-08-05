#!/usr/bin/env node
var pkg = require('../package.json')
var program = require('commander')
var path = require('path')
var karma = require('karma')

program
  .version(pkg.version)
  .arguments('<configFile>')
  .action(run)

program.parse(process.argv)

if (!program.args.length) run()

function run (spec) {
  setSpec(spec)
  var Server = karma.Server
  var server = new Server({
    port: 9876,
    configFile: getConfig(),
    singleRun: true
  }, process.exit)
  server.start({}, process.exit)
}

function setSpec (spec) {
  if (spec) spec = path.resolve(process.cwd(), spec)
  process.env.BATTLETEST_SPEC = spec || process.env.BATTLETEST_SPEC || path.join(__dirname, '../example.json')
}

function getConfig () {
  if (process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY) return path.join(__dirname, '../karma.sauce.conf.js')
  return path.join(__dirname, '../karma.conf.js')
}
