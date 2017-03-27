const utils = require('../utils');

const isReselectImported = utils.isReselectImported;
const getSelectors = utils.getSelectors;

function test(context, node) {
  if (!isReselectImported(context)) {
    return;
  }

  if (node.params[1].type !== 'ObjectPattern') {
    context.report(node.params[1], 'Second argument must be destructured');
  }
}

module.exports = (context) => {
  const condition = '[params.length=2]';

  return getSelectors(condition, test.bind(null, context));
};
module.schema = [];

