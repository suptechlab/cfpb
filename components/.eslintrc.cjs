module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.d.ts', '.tsx'],
        moduleDirectory: [
          'node_modules',
        ],
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'no-console': ['warn'],
    'no-use-before-define': ['error'],
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
};
