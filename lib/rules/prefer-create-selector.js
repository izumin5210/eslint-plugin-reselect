const utils = require('../utils');

const isReselectImported = utils.isReselectImported;
const getSelectors = utils.getSelectors;

function test(context, node) {
  if (!isReselectImported(context)) {
    return;
  }

  context.report(node, 'Prefer use of createSelector function');
}

module.exports = (context) => {
  const startWith = context.options[0] || 'get';
  const paramName = context.options[1] || 'state';
  const condition = ` CallExpression[callee.name=/^${startWith}.+/][arguments.0.name=${paramName}]`;

  return getSelectors(condition, test.bind(null, context));
};

module.schema = [
  {
    type: 'string',
  },
];
