eslint-plugin-reselect
========================

Enforce best practices in selectors written with [Reselect](https://github.com/reactjs/reselect)

# Installation

```sh
$ npm i eslint-plugin-reselect
```

# Configuration

Add `plugins` section and specify eslint-plugin-reselect as a plugin.

Add rule `reselect/signature` in rules section.

```json
{
  "plugins": [
    "reselect"
  ],
  "rules": {
    "reselect/signature": "error",
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
* reselect/signature: Maximum arity of 2, second argument must be a destructuring object. Rule triggered when :
 * function name begins by `get`
 * function at root level (exported or not)
 
# License

eslint-plugin-reselect is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
