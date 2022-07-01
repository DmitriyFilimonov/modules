
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pack.cjs.production.min.js')
} else {
  module.exports = require('./pack.cjs.development.js')
}
