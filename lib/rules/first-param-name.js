const utils = require('../utils');

const isReselectImported = utils.isReselectImported;
const getSelectors = utils.getSelectors;

function test(context, node) {
  const paramName = context.options[0] || 'state';
  if (!isReselectImported(context)) {
    return;
  }

  context.report(node, `First parameter must be named '${paramName}'`);
}

module.exports = (context) => {
  const paramName = context.options[0] || 'state';
  const condition = ` .params:first-child[name!=${paramName}]`;

  return getSelectors(condition, test.bind(null, context));
};

module.schema = [
  {
    type: 'string',
  },
];
