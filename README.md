eslint-plugin-reselect
========================

Enforce best practices to selectors with ESLint

# Installation

```sh
$ npm i eslint-plugin-reselect
```

# Configuration

Add `plugins` section and specify eslint-plugin-reselect as a plugin.

```json
{
  "plugins": [
    "reselect"
  ]
}
```

# List of supported rules

* reselect/signature: Maximum arity of 2, second argument must be a destructuring object

## Recommended

This plugin exports a `recommended` configuration that enforce Selector good practices.

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```js
{
  "extends": ["plugin:reselect/recommended"]
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

The rules enabled in this configuration are:

* reselect/signature: Maximum arity of 2, second argument must be a destructuring object

## All

This plugin also exports an `all` configuration that includes every available rule.

```js
{
  "plugins": [
    "reselect"
  ],
  "extends": ["plugin:reselect/all"]
}
```

# License

eslint-plugin-reselect is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).