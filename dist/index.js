
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./verbum.cjs.production.min.js')
} else {
  module.exports = require('./verbum.cjs.development.js')
}
