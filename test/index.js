var equal = require('assert').equal
var hash = require('..')


equal(hash('abc'),  'a9993e364706816aba3e25717850c26c9cd0d89d')
equal(hash('abce'), '0a431a7631cabf6b11b984a943127b5e0aa9d687')
equal(hash({}),     'bf21a9e8fbc5a3846fb05b4fa0859e0917b2202f')
equal(hash([]),     '97d170e1550eee4afc0af065b78cda302a97674c')
equal(hash(new Buffer('abc')),
                    'a9993e364706816aba3e25717850c26c9cd0d89d')


