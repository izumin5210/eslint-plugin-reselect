const utils = require('../utils');

const isReselectImported = utils.isReselectImported;
const isCandidate = utils.isCandidate;

function test(node, context) {
  const arity = context.options[0] || 2;
  if (!isReselectImported(context)) {
    return;
  }

  if (!isCandidate(node)) {
    return;
  }

  if (node.params.length === 0) {
    return;
  }
  if (node.params.length > arity) {
    context.report(node, `Maximum arity in selector must be ${arity}`);
  }
}

module.exports = context => ({
  ArrowFunctionExpression(node) {
    test(node, context);
  },
  FunctionExpression(node) {
    test(node, context);
  },
  FunctionDeclaration(node) {
    test(node, context);
  },
});

module.schema = [
  {
    type: 'integer',
  },
];

