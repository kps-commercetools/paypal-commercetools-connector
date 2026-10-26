const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/', 'build/'] },
  ...[js.configs.recommended, ...tseslint.configs.recommended].map(
    (config) => ({ ...config, files: ['**/*.ts'] })
  ),
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.es2015,
        ...globals.jest,
        ...globals.node, //adds things like process to global
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': 'error',
      'no-const-assign': 'error',
    },
  },
];
