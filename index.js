'use strict'

var allRules = {
  'second-param-destructured': require('./lib/rules/second-param-destructured'),
  'first-param-name': require('./lib/rules/first-param-name'),
  'maximum-arity': require('./lib/rules/maximum-arity'),
  'no-get-state': require('./lib/rules/no-get-state')
}

module.exports = {
  rules: allRules
}
