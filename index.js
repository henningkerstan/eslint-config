module.exports = {
  env: {
    browser: true,
    es2020: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],

  rules: {
    // include prettier formatting
    'prettier/prettier': 'error',

    // require blocks to be in curly braces
    curly: 'error',

    // define naming conventions
    '@typescript-eslint/naming-convention': [
      'error',

      // default is camelCase without leading/trailing underscores
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },

      // private members may have a leading underscore
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },

      // default for types is PascalCase
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
}
