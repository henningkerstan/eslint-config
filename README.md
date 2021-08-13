# eslint-config
My personal configuration for [ESLint](https://eslint.org). 

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