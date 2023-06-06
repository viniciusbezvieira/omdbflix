module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'react/no-unstable-nested-components': ['off'],
    'react-hooks/exhaustive-deps': ['off'],
  },
};
