module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-closing-bracket-location': [1, {
      nonEmpty: false,
      selfClosing: false,
    }],
  },
};
