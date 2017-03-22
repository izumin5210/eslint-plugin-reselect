/* eslint-env mocha */

const plugin = require('..');

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ruleFiles = fs.readdirSync(path.resolve(__dirname, '../lib/rules/'))
  .map(f => path.basename(f, '.js'));

describe('all rule files should be exported by the plugin', () => {
  ruleFiles.forEach((ruleName) => {
    it(`should export ${ruleName}`, () => {
      assert.equal(
        plugin.rules[ruleName],
        // eslint-disable-next-line
        require(path.join('../lib/rules', ruleName))
      );
    });
  });
});
