module.exports = {
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/no-extraneous-dependencies": [
      2,
      { devDependencies: ["**/test.tsx", "**/test.ts"] },
    ],
    "@typescript-eslint/indent": [2, 2],
    quotes: ["error", "double"],
  },
};
