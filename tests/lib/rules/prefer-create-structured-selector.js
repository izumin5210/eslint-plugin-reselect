// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/prefer-create-structured-selector');
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
ruleTester.run('prefer-create-structured-selector', rule, {
  valid: []
    .concat([
      {
        code:
`import 'reselect';
const structuredSelector = createStructuredSelector({
  x: mySelectorA,
  y: mySelectorB
})`,
        parserOptions,
      },
    ]),
  invalid: []
    .concat([
      {
        code:
`import 'reselect';
const getFoo = (state) => ({
  a: getA(state),
  b: getB(state)
})`,
        errors: [{
          message: 'Prefer use of createStructuredSelector function',
          line: 2,
          column: 16,
          type: 'ArrowFunctionExpression',
        }],
        parserOptions,
      },
      {
        code:
`import 'reselect';
createSelector(
   mySelectorA,
   mySelectorB,
   mySelectorC,
   (a, b, c) => ({
     a,
     b,
     c
   })
)`,
        errors: [{
          message: 'Prefer use of createStructuredSelector function',
          line: 6,
          column: 4,
          type: 'ArrowFunctionExpression',
        }],
        parserOptions,
      },
    ]),
});
