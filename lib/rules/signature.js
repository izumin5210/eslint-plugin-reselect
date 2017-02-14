function isReselectImported (context) {
  const imports = context.getSourceCode().ast.body
    .filter(n => n.type === 'ImportDeclaration')

  return imports.some(n => n.source.value === 'reselect')
}

function test (node, context) {
  if (!isReselectImported(context)) {
    return
  }
  if (!node.parent || !node.parent.parent || !node.parent.parent.parent) {
    return;
  }
  const rootType = node.parent.parent.parent.type
  if (!/(Program)|(ExportNamedDeclaration)$/.test(rootType)) {
    return
  }
  if (!/^get/.test(node.parent.id.name)) {
    return
  }
  if (node.params.length === 0) {
    return
  }
  if (node.params[0].name !== 'state') {
    context.report(node, 'First parameter must be named \'state\'')
  }
  if (node.params.length > 2) {
    context.report(node, 'Maximum arity in selector must be 2')
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
    }
  }
}

module.schema = []

