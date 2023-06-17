module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    "plugin:react/jsx-runtime",
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: ".",
    project: './tsconfig.json'
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint'],
  settings: {
    "import/resolver": {
      typescript: {
        project: './tsconfig.json'
      }
    },
    react: {
      "version": '18.x'
    }
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ],
    "object-shorthand": "error",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", {"extensions": [".tsx"]}],
    "import/extensions": ["error", "ignorePackages", { ts: "off", tsx: "off" }],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    'react-refresh/only-export-components': 'warn',
    'max-len': ['warn', { 'code': 100, 'comments': 200 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'quotes': ["error", "double"],
    "react/jsx-no-useless-fragment": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
}
