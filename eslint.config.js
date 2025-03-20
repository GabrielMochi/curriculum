import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import reactplugin from "eslint-plugin-react";
import reacthooks from "eslint-plugin-react-hooks";
import reactrefresh from "eslint-plugin-react-refresh";
import importplugin from "eslint-plugin-import";
import globals from "globals";

// Initialize TypeScript ESLint
const typescript = {
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    parser: tsparser,
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: ".",
    },
  },
  plugins: {
    "@typescript-eslint": tseslint,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    ...tseslint.configs["recommended-requiring-type-checking"].rules,
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/no-empty-object-type": "off",
    "no-use-before-define": "off",
    "no-shadow": "off",
  },
};

export default [
  {
    ignores: ["dist/**", "node_modules/**", "vite.config.ts"],
  },
  eslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2020,
        React: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactplugin,
      "react-hooks": reacthooks,
      "react-refresh": reactrefresh,
      import: importplugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
      react: {
        version: "19.x",
      },
    },
    rules: {
      ...reactplugin.configs.recommended.rules,
      ...reactplugin.configs["jsx-runtime"].rules,
      "object-shorthand": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        { ts: "never", tsx: "never", js: "never", jsx: "never" },
      ],
      "react-refresh/only-export-components": "warn",
      "max-len": [
        "warn",
        {
          code: 100,
          comments: 200,
          ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
          ignoreUrls: true,
        },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-one-expression-per-line": "off",
      quotes: ["error", "double", { avoidEscape: true }],
      "react/jsx-no-useless-fragment": "off",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "react/function-component-definition": "off",
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
    },
  },
  typescript,
];
