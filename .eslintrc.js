module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        node: true,
        browser: true,
        commonjs: true,
    },
    settings: {},
    extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'eslint:recommended'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-components': 'off',
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
        indent: ['error', 4, { SwitchCase: 1 }],
    },
};
