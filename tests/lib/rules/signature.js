// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/signature')
var RuleTester = require('eslint').RuleTester

var parserOptions = {
  ecmaVersion: 6,
  sourceType: "module",
  ecmaFeatures: {
    experimentalObjectRestSpread: true
  }
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('signature', rule, {
  valid: []
    .concat({
      code: 
`import { createSelector } from 'reselect';
const getView = (state, { id }) => state;`,
      parserOptions: parserOptions
    }),
  invalid: []
    .concat([
      {
        code: 
`import { createSelector } from 'reselect';
const getfoo = function(state, id) { return true; }`,
        errors: [{
          message: 'Second argument must be destructured',
          line: 2,
          column: 32,
          type: 'Identifier'
        }],
        parserOptions: parserOptions
      }
    ])
})