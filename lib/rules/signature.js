function isReselectImported (context) {
  const imports = context.getSourceCode().ast.body
    .filter(n => n.type === 'ImportDeclaration')

  return imports.some(n => n.source.value === 'reselect')
}

const isFunctionIsNamedAndStartWithGetOrAnonymous =
  node => node.parent.type === 'VariableDeclarator'
  && /^get/.test(node.parent.id.name);
const isRoot =
  node => node.parent.parent.parent.type === 'Program'
  && isFunctionIsNamedAndStartWithGetOrAnonymous(node);
const isExported =
  node => node.parent.parent.parent.type === 'ExportNamedDeclaration'
  && isFunctionIsNamedAndStartWithGetOrAnonymous(node);
const isCalledInCreateSelectorFunction =
  node => 
    node.parent.type === 'CallExpression'
    && /create.*selector/i.test(node.parent.callee.name)
    && node.parent.arguments.slice(-1)[0] !== node

function test (node, context) {
  if (!isReselectImported(context)) {
    return
  }
  if (!node.parent || !node.parent.parent || !node.parent.parent.parent) {
    return
  }

  const isCandidate = [
    isRoot, 
    isExported,
    isCalledInCreateSelectorFunction
  ].some(fn => fn(node));
  
  if (!isCandidate) {
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

