// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/first-param-name')
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
ruleTester.run('first-param-name', rule, {
  valid: []
    .concat([
      {
        code: 
`import { createSelector } from 'reselect';
const getView = (state, { id }) => state;`,
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
const getFoo = function(hey, id) { return true; }`,
        errors: [{
          message: 'First parameter must be named \'state\'',
          line: 2,
          column: 16,
          type: 'FunctionExpression'
        }],
        parserOptions: parserOptions
      },
    ])
})
