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
  }
}
```

# List of supported rules

* reselect/first-param-name: First param must be named `state`. Name can be configured. Here is an example with `fullState`: 
```js
"rules": {
	...
    "reselect/first-param-name": ["error", "fullState"],
    ...
```
* reselect/maximum-arity: Maximum arity of 2. Arity can be modified like this :
```js
"rules": {
	...
    "reselect/maximum-arity": ["error", 3],
    ...
```
* reselect/second-param-destructured: Second argument must be a destructuring object. 

All rules are triggered in a file when :
 * `reselect` is imported
 * function name begins by `get`
 * function at root level (exported or not)


If you don't use [Reselect](https://github.com/reactjs/reselect) in your selector file, you can just import [Reselect](https://github.com/reactjs/reselect) like this to enable rules

```js 
import 'reselect';
```

# License

eslint-plugin-reselect is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
