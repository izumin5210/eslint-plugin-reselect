const get = require('lodash/get');

const isReselectImported = (context) => {
  const imports = context.getSourceCode().ast.body
    .filter(n => n.type === 'ImportDeclaration')

  return imports.some(n => n.source.value === 'reselect')
}

const runCondition = (condition, node) =>
  typeof condition === 'string' ?
    node.parent.type === condition :
    typeof condition === 'function' ?
      condition(node) : false;

const getParent = (condition, node) => {
  if (node.parent) {
    if (runCondition(condition, node)) {
      return node.parent;
    } else {
      return getParent(condition, node.parent);
    }
  }
}

const isAnonymousIsNamedAndStartWithGetOrAnonymous =
  node => get(node, 'parent.type') === 'VariableDeclarator'
  && /^get/.test(node.parent.id.name);
const isFunctionIsNamedAndStartWithGetOrAnonymous =
  node => /^get/.test(get(node, 'id.name'));
const isRoot =
  node => get(node, 'parent.parent.parent.type') === 'Program'
  && isAnonymousIsNamedAndStartWithGetOrAnonymous(node);
const isExportedAnonymous =
  node => get(node, 'parent.parent.parent.type') === 'ExportNamedDeclaration'
  && isAnonymousIsNamedAndStartWithGetOrAnonymous(node);
const isExportedFunction =
  node => get(node, 'parent.type') === 'ExportNamedDeclaration'
  && isFunctionIsNamedAndStartWithGetOrAnonymous(node);
const isCalledInCreateSelectorFunction =
  node => 
    node.parent.type === 'CallExpression'
    && /create.*selector/i.test(node.parent.callee.name)
    && node.parent.arguments.slice(-1)[0] !== node

const isCandidate = (node) => ([
  isRoot, 
  isExportedAnonymous,
  isCalledInCreateSelectorFunction,
  isExportedFunction
].some(fn => fn(node)));

module.exports = {
  isCandidate: isCandidate,
  isReselectImported: isReselectImported,
  getParent: getParent
};