
var createHash = require('crypto').createHash 
var Buffer = require('buffer').Buffer
module.exports = function hash (str, alg, format) {
  str = 'string' === typeof str ? str
    : Buffer.isBuffer(str) ? str
    : JSON.stringify(str)
  return createHash(alg || 'sha1').update(str).digest(format || 'hex')
}

