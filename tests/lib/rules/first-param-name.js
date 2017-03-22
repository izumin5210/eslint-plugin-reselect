// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/first-param-name');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
  },
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('first-param-name', rule, {
  valid: []
    .concat([
      {
        code:
`import { createSelector } from 'reselect';
const getView = (state, { id }) => state;`,
        parserOptions,
      },
      {
        code:
`import { createSelector } from 'reselect';
const getView = (st, { id }) => state;`,
        parserOptions,
        options: ['st'],
      },
      {
        code:
'const getTiew = (one, two, three) => one;',
        parserOptions,
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
          type: 'FunctionExpression',
        }],
        parserOptions,
      },
    ]),
});
