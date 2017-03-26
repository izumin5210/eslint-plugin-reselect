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
  const condition = ' CallExpression[callee.name=/^get.+/]';

  return getSelectors(condition, test.bind(null, context));
};

module.schema = [
  {
    type: 'string',
  },
];
