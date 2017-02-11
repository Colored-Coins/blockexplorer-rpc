/* eslint-env mocha */
var BlockExplorerRpc = require('..')
var be = new BlockExplorerRpc('http://testnet.explorer.coloredcoins.org')
var assert = require('assert')

describe('Test Block-Explorer RPC', function () {
  it('get', function (done) {
    this.timeout(10000)
    var queryParams = {
      start: 100000,
      end: 100005
    }
    be.get('getblocks', queryParams, function (err, blocks) {
      assert.ifError(err)
      assert(Array.isArray(blocks))
      assert.equal(blocks.length, 6)
      done()
    })
  })

  it('post', function (done) {
    this.timeout(10000)
    var body = {
      addresses: ['n3uC4tw2SNFm5P4sfUyAMoSKMcg5ae8Pkj', 'mu9zmAWNtg3pr4QC23bdjdjXup6wJ8kQUh']
    }
    be.post('isactive', body, function (err, addresses) {
      assert.ifError(err)
      assert(Array.isArray(addresses))
      assert.equal(addresses.length, 2)
      done()
    })
  })
})
