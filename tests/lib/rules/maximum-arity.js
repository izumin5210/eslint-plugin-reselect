// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/maximum-arity')
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
ruleTester.run('maximum-arity', rule, {
  valid: []
    .concat([
      {
        code: 
`import { createSelector } from 'reselect';
const getView = (state) => state;`,
        parserOptions: parserOptions
      },
      {
        code: 
`import { createSelector } from 'reselect';
const getView = (state, foo) => state;`,
        parserOptions: parserOptions
      },      
      {
        code: 
`const getTiew = (one, two, three) => one;`,
        parserOptions: parserOptions
      },      
    ]),
  invalid: []
    .concat([
      {
        code: 
`import { createSelector } from 'reselect';
const getFoo = function(state, id, foo) { return true; }`,
        errors: [{
          message: 'Maximum arity in selector must be 2',
          line: 2,
          column: 16,
          type: 'FunctionExpression'
        }],
        parserOptions: parserOptions
      },
    ])
})
