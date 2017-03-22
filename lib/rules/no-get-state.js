const utils = require('../utils');
const isReselectImported = utils.isReselectImported;
const isCandidate = utils.isCandidate;
const getParent = utils.getParent;

function callExpression(node, context) {
  if (isCandidate(node)) {
    return;
  }
  if (node.callee.name === 'getState') {
    context.report(node, 'Can\'t access directly to state outside of selector');
  }
}

function identifier(node, context) {
  if (getParent(isCandidate, node)) {
    return
  }
  if (node.name === 'state') {
    context.report(node, 'Can\'t access directly to state outside of selector');
  }
}

module.exports = function (context) {
  return {
    CallExpression(node) {
      callExpression(node, context);
    },
    Identifier(node) {
      identifier(node, context);
    }
  }
}

module.schema = []

