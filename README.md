eslint-plugin-reselect
========================

Enforce best practices to selectors with ESLint

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

* reselect/signature: Maximum arity of 2, second argument must be a destructuring object

# License

eslint-plugin-reselect is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).