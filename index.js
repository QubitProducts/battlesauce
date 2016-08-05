var config = __BATTLETEST__
var expect = require('expect.js')
var http = require('@qubit/http-api')

describe('⚔  Battle testing...', function tests () {
  this.timeout(10000)
  for (var i = 0; i < config.length; i++) check(config[i])

  function check (api) {
    describe(api.describe, function (done) {
      describe(api.url, function () {
        it('should not error', function (done) {
          callAPI(api, function callback (err) {
            expect(!err).to.eql(true, 'expected no error')
            done()
          })
        })
        if (api.response.json) {
          it('should respond with parseable json', function (done) {
            callAPI(api, function callback (nope, resp) {
              JSON.parse(resp)
              done()
            })
          })
          it('should respond with the correct json', function (done) {
            callAPI(api, function callback (nope, resp) {
              expect(JSON.parse(resp)).to.eql(api.response.json)
              done()
            })
          })
        }
        if (api.response.text) {
          it('should respond with the correct text', function (done) {
            callAPI(api, function callback (nope, resp) {
              expect(resp).to.eql(api.response.text)
              done()
            })
          })
        }
      })
    })

    function callAPI (api, callback) {
      var args = [api.url]
      if (api.data) args.push(api.data)
      args.push(callback)
      http[api.method || 'get'].apply(http, args)
    }
  }
})
