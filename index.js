'use strict'

var allRules = {
  'signature': require('./lib/rules/signature'),
}

function configureAsError (rules) {
  var result = {}
  for (var key in rules) {
    if (!rules.hasOwnProperty(key)) {
      continue
    }
    result['reselect/' + key] = 2
  }
  return result
}

module.exports = {
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'reselect'
      ],
      rules: {
        'reselect/signature': 2,
      }
    },
    all: {
      plugin: [
        'reselect'
      ],
      rules: configureAsError(allRules)
    }
  }
}