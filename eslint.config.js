const babelParser = require("@babel/eslint-parser");
const reactPlugin = require("eslint-plugin-react");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: babelParser, // Use Babel parser for JSX
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false, // Allow parsing without a Babel config file
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"], // Enable JSX syntax
        },
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React in scope
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
