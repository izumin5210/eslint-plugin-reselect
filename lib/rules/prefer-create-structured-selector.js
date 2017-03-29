const utils = require('../utils');

const isReselectImported = utils.isReselectImported;
const getSelectors = utils.getSelectors;

module.exports = (context) => {
  'use strict'; // eslint-disable-line

  const condition = ' :matches(ObjectExpression, BlockStatement > ReturnStatement > ObjectExpression)';
  let fnNode;

  function test() {
    if (!isReselectImported(context)) {
      return;
    }
    const newFnNode = context.getAncestors().filter(n => /Function/.test(n.type))[0];
    if (fnNode !== newFnNode) {
      context.report(newFnNode, 'Prefer use of createStructuredSelector function');
      fnNode = newFnNode;
    }
  }

  return Object.assign(
    {
      'CallExpression[callee.name=/^createSelector/] > :function:last-child :matches(ObjectExpression, BlockStatement > ReturnStatement > ObjectExpression)': test,
    },
    getSelectors(condition, test, {
      createSelectorPattern: '^createSelector',
    }) // eslint-disable-line
  );
};

module.schema = [
  {
    type: 'string',
  },
];
