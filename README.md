# eslint-config

My personal configuration for [ESLint](https://eslint.org).

## Rules

This configuration uses the rulesets

- `eslint:recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:@typescript-eslint/recommended-requiring-type-checking`
- `plugin:prettier/recommended`

and extends them as explained below.

### Naming Convention

- The default is to use camelCase and leading or trailing underscores are forbidden.
- Types and enum members must be in PascalCase.

### Other

- Prettier formatting errors will be marked as errors
- Blocks are required to be in curly braces

## Install and use

1. Install this package using npm

```
npm i --save-dev @henningkerstan/eslint-config
```

2. Add a file `.eslintrc.js` with the following content

```javascript
module.exports = {
  extends: ['@henningkerstan/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
```

For more information or a custom configuration, have a look at https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/docs/getting-started/linting/TYPED_LINTING.md

## License

Copyright 2021 [Henning Kerstan](https://henningkerstan.de)

SPDX-License-Identifier: Apache-2.0
