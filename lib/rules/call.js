function test(context, node) {
  context.report(node, 'Second argument must be an object declaration');
}

module.exports = (context) => {
  const startWith = context.options[0] || 'get';
  const paramName = context.options[1] || 'state';

  return {
    [`CallExpression[callee.name=/^${startWith}.+/][arguments.length=2][arguments.0.name=${paramName}] > :not(ObjectExpression):last-child`]: test.bind(null, context),
  };
};

module.schema = [];
