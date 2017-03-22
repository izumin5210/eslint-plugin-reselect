// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-get-state')
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
ruleTester.run('no-get-state', rule, {
  valid: []
    .concat([

      {
        code: 
`const foo = (foo) => foo`,
        parserOptions: parserOptions
      },
      {
        code: 
`import { createSelector } from 'reselect';
const getView = (state, { id }) => state;`,
        parserOptions: parserOptions
      },      
      {
        code: 
`import { createSelector } from 'reselect';
const getView = (state, foo) => state;`,
        parserOptions: parserOptions
      },        
    ]),
  invalid: []
    .concat([
      {
        code: 
`state`,
        errors: [{
          message: 'Can\'t access directly to state outside of selector',
          line: 1,
          column: 1,
          type: 'Identifier'
        }],
        parserOptions: parserOptions
      },
      {
        code: 
`getState()`,
        errors: [{
          message: 'Can\'t access directly to state outside of selector',
          line: 1,
          column: 1,
          type: 'CallExpression'
        }],
        parserOptions: parserOptions
      }
    ])
})
