const utils = require('../utils');

const isReselectImported = utils.isReselectImported;

function test(context, node) {
  if (!isReselectImported(context)) {
    return;
  }

  context.report(node, 'Second argument must be destructured');
}

module.exports = (context) => {
  const condition = '[params.length=2] > :not(ObjectPattern):last-child';

  return {
    [`:matches(Program > VariableDeclaration > *, Program > FunctionDeclaration) > ${condition}`]:
      test.bind(null, context),
    'CallExpression[callee.name=/^create.*Selector/] [params.length=2]:not(:last-child) :not(ObjectPattern):last-child':
      test.bind(null, context),
    [`:matches(ExportNamedDeclaration, ExportDefaultDeclaration) ${condition}`]:
      test.bind(null, context),
  };
};
module.schema = [];

