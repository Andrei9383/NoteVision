const parser = require('@typescript-eslint/parser');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    programs: [parser.createProgram('tsconfig.json')],

  },
  plugins: [
    'react',
    '@typescript-eslint',
    'typescript'
  ],
  
  rules: {
  }
}
  