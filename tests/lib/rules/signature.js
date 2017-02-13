// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/signature')
var RuleTester = require('eslint').RuleTester

var parserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
  }
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('signature', rule, {
  valid: []
    .concat({
      code: `const getView = (state, { id }) => state;`,
      parserOptions: parserOptions
    }),
  invalid: []
    .concat([
      {
        code: `const getfoo = function(state, id) { return true; }`,
        errors: [{
          message: 'Second argument must be destructured',
          line: 1,
          column: 32,
          type: 'Identifier'
        }],
        parserOptions: parserOptions
      }
    ])
});
