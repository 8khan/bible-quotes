const globals = require('globals');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['lib/**'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': ts,
      prettier,
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
];
