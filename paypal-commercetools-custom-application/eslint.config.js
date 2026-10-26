process.env.ENABLE_NEW_JSX_TRANSFORM = 'true';

const mcAppConfig = require('@commercetools-frontend/eslint-config-mc-app');

/**
 * @type {import("eslint").Linter.Config[]}
 */
module.exports = [
  {
    ignores: ['.cache/', 'build/', 'dist/', 'public/', 'src/types/generated/'],
  },
  ...mcAppConfig,
  {
    files: ['setup.js'],
    languageOptions: { globals: { jest: 'readonly' } },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
