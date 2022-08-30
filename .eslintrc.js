module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:react/jsx-runtime",
    "plugin:storybook/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": 0, // seems get a lot of error from third party libs
    "@typescript-eslint/consistent-type-definitions": ["error", "type"], // prefer  type aliases
    "react/prop-types": 0, // checked via typscript type system
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
