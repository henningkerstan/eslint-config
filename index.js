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
    'prettier',
  ],

  rules: {
    curly: 'error', // require blocks to be in curly braces
  },
}
