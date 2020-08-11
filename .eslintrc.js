module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'import/extensions': 'off',
        'no-extra-semi': 2,
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off',
        'selector-type-no-unknown': 'off',
        'no-template-curly-in-string': 'off'
    }
};
