const utils = require('../utils');
const isReselectImported = utils.isReselectImported;
const isCandidate = utils.isCandidate;

function test (node, context) {
  if (!isReselectImported(context)) {
    return
  }
  
  if (!isCandidate(node)) {
    return
  }

  if (node.params.length === 0) {
    return
  }
  if (node.params.length === 2 && node.params[1].type !== 'ObjectPattern') {
    context.report(node.params[1], 'Second argument must be destructured')
  }
}

module.exports = function (context) {
  return {
    ArrowFunctionExpression (node) {
      test(node, context)
    },
    FunctionExpression (node) {
      test(node, context)
    },
    FunctionDeclaration (node) {
      test(node, context)
    }
  }
}

module.schema = []

