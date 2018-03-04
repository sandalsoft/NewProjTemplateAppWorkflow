module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  plugins: ['unicorn', 'no-loops', 'promise', 'security', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended'
  ],
  rules: {
    'no-console': 0,
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'no-debugger': 'warn',
    'no-var': 'error',
    'no-param-reassign': 'error',
    'no-undef': 'error',
    'no-trailing-spaces': 'warn',
    'eol-last': 0,
    'no-underscore-dangle': 'warn',
    'no-alert': 'error',
    'no-lone-blocks': 'warn',
    'arrow-parens': 'error',
    'no-loops/no-loops': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error'
  }
};
