const utils = require('../utils');

const isReselectImported = utils.isReselectImported;
const getSelectors = utils.getSelectors;

function test(context, node) {
  const arity = context.options[0] || 2;
  if (!isReselectImported(context)) {
    return;
  }

  context.report(node, `Maximum arity in selector must be ${arity}`);
}

module.exports = (context) => {
  const arity = context.options[0] || 2;
  const condition = `[params.length>${arity}]`;

  return getSelectors(condition, test.bind(null, context));
};

module.schema = [
  {
    type: 'integer',
  },
];

