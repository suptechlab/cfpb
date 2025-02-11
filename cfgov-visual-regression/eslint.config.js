// Run `npx @eslint/config-inspector` to inspect the config.

import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import pluginCypress from 'eslint-plugin-cypress/flat';
import eslintConfigPrettier from 'eslint-config-prettier';

export default ts.config(
  {
    ignores: [
      '.yarn/',
    ],
  },
  js.configs.recommended,
  ts.configs.recommended,
  reactPlugin.configs.flat.recommended,
  pluginCypress.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 2023,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.ts', '.d.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    // Some plugins are automatically included.
    // plugins: {},
    rules: {
      'no-console': ['warn'],
      'no-use-before-define': ['error', 'nofunc'],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      'no-var': ['error'],
      'prefer-const': ['error'],
      radix: ['error'],
    },
  },
);

