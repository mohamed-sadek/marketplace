module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  "root": true,
  "parser": "@typescript-eslint/parser",
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  overrides: [
   
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["tsconfig.json"]
  },
  plugins: [
    'react',
    "@typescript-eslint",
  ],
  rules: {
    indent: ['error', 2],
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-no-bind": "off",
  },
};
