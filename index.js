/* eslint-disable global-require */

const allRules = {
  'second-param-destructured': require('./lib/rules/second-param-destructured'),
  'first-param-name': require('./lib/rules/first-param-name'),
  'maximum-arity': require('./lib/rules/maximum-arity'),
  call: require('./lib/rules/call'),
  'prefer-create-selector': require('./lib/rules/prefer-create-selector'),
  'prefer-create-structured-selector': require('./lib/rules/prefer-create-structured-selector'),
};

module.exports = {
  rules: allRules,
  configs: {
    all: {
      rules: {
        'reselect/first-param-name': 2,
        'reselect/maximum-arity': 2,
        'reselect/second-param-destructured': 2,
        'reselect/call': 2,
        'reselect/prefer-create-selector': 1,
        'reselect/prefer-create-structured-selector': 0,
      },
    },
    recommended: {
      rules: {
        'reselect/first-param-name': 2,
        'reselect/maximum-arity': 2,
        'reselect/prefer-create-selector': 1,
        'reselect/prefer-create-structured-selector': 0,
      },
    },
  },
};
