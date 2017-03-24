const utils = require('../utils');

const isReselectImported = utils.isReselectImported;

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

  return {
    [`:matches(Program > VariableDeclaration > *, Program > FunctionDeclaration) > ${condition}`]:
      test.bind(null, context),
    [`CallExpression[callee.name=/^create.*Selector/] :not(:last-child) ${condition}`]:
      test.bind(null, context),
    [`:matches(ExportNamedDeclaration, ExportDefaultDeclaration) ${condition}`]:
      test.bind(null, context),
  };
};

module.schema = [
  {
    type: 'integer',
  },
];

