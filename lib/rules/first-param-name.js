const utils = require('../utils');

const isReselectImported = utils.isReselectImported;

function test(context, node) {
  const paramName = context.options[0] || 'state';
  if (!isReselectImported(context)) {
    return;
  }

  context.report(node, `First parameter must be named '${paramName}'`);
}

module.exports = (context) => {
  const paramName = context.options[0] || 'state';
  const condition = `.params:first-child[name!=${paramName}]`;

  return {
    [`:matches(Program > VariableDeclaration > * > *, Program > FunctionDeclaration) > ${condition}`]:
      test.bind(null, context),
    [`CallExpression[callee.name=/^create.*Selector/] :not(:last-child) ${condition}`]:
      test.bind(null, context),
    [`:matches(ExportNamedDeclaration, ExportDefaultDeclaration) ${condition}`]:
      test.bind(null, context),
  };
};

module.schema = [
  {
    type: 'string',
  },
];
