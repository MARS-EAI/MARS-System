module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["eslint-config-ali/typescript/react", "eslint-config-ali/jsx-a11y"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
  rules: {
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    indent: [
      "error",
      4,
      {
        ignoredNodes: ["TemplateLiteral"],
        SwitchCase: 1,
      },
    ],
    "@typescript-eslint/indent": ["error", 4],
    "max-len": [
      "warn",
      {
        code: 200,
      },
    ],
    "import/no-cycle": "warn",
    "no-console": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "@typescript-eslint/consistent-type-assertions": "off",
  },
};
