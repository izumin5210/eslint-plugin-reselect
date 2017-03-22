/* eslint-disable global-require */

const allRules = {
  'second-param-destructured': require('./lib/rules/second-param-destructured'),
  'first-param-name': require('./lib/rules/first-param-name'),
  'maximum-arity': require('./lib/rules/maximum-arity'),
};

module.exports = {
  rules: allRules,
};
