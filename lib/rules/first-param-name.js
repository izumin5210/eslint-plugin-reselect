const utils = require('../utils');

const isReselectImported = utils.isReselectImported;
const isCandidate = utils.isCandidate;

function test(node, context) {
  const paramName = context.options[0] || 'state';
  if (!isReselectImported(context)) {
    return;
  }

  if (!isCandidate(node)) {
    return;
  }

  if (node.params.length === 0) {
    return;
  }
  if (node.params[0].name !== paramName) {
    context.report(node, `First parameter must be named '${paramName}'`);
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
    type: 'string',
  },
];
