eslint-plugin-reselect [![Build Status](https://travis-ci.org/popul/eslint-plugin-reselect.svg?branch=master)](https://travis-ci.org/popul/eslint-plugin-reselect) [![Dependency Status](https://david-dm.org/popul/eslint-plugin-reselect.svg)](https://david-dm.org/popul/eslint-plugin-reselect) [![devDependency Status](https://david-dm.org/popul/eslint-plugin-reselect/dev-status.svg)](https://david-dm.org/popul/eslint-plugin-reselect#info=devDependencies)
========================

Enforce best practices in selectors written with [Reselect](https://github.com/reactjs/reselect)

# Installation

```sh
$ npm i eslint-plugin-reselect
```

# Configuration

Add `plugins` section and specify eslint-plugin-reselect as a plugin.

Add rules below in rules section.

```json
{
  "plugins": [
    "reselect"
  ],
  "rules": {
    "reselect/first-param-name": "error",
    "reselect/maximum-arity": "error",
    "reselect/second-param-destructured": "error",
    "reselect/no-get-state": "error",
  }
}
```

# List of supported rules

Rules are triggered in a file when `reselect` is imported like this 
```js
import { ... } from 'reselect';
```

If you don't use reselect in your selector file, you can just import reselect like this to enable rules
```js 
import 'reselect';
```
* reselect/first-param-name: First param must be named `state`.
* reselect/maximum-arity: Maximum arity of 2.
* reselect/second-param-destructured: Second argument must be a destructuring object. 
* reselect/no-get-state: Prevent use of state and getState outside of selectors. 

All rules are triggered when :
 * function name begins by `get`
 * function at root level (exported or not)

# License

eslint-plugin-reselect is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
