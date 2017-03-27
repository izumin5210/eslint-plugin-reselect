function test(context, node) {
  if (node.arguments[1].type !== 'ObjectExpression') {
    context.report(node.arguments[1], 'Second argument must be an object declaration');
  }
}

module.exports = (context) => {
  const startWith = context.options[0] || 'get';
  const paramName = context.options[1] || 'state';

  return {
    [`CallExpression[callee.name=/^${startWith}.+/][arguments.length=2][arguments.0.name=${paramName}]`]: test.bind(null, context),
  };
};

module.schema = [];
