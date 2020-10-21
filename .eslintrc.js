module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: 'tsconfig.json',
    },
    ignorePatterns: ['node_modules/**', '.storybook/**', '*.css', '*.js'],
    plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc', 'security', 'react-hooks', 'import'],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:security/recommended',
    ],
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        // Disabled Rules
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        // Enabled rules
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'enumMember',
                format: ['StrictPascalCase'],
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'StrictPascalCase'],
            },
            {
                selector: 'memberLike',
                format: ['camelCase', 'snake_case'],
            },
        ],
        'react/display-name': 'warn',
        'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
        'react-hooks/rules-of-hooks': 'warn', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        complexity: ['warn', { max: 10 }],
        'max-depth': ['warn', { max: 4 }],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true,
            },
        ],
        'tsdoc/syntax': 'warn',
        'padding-line-between-statements': [
            'warn',
            // Add a new line after multiple variable declaration
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            // Add a new line after multiple import declaration
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
            // Add a new line after if
            { blankLine: 'always', prev: 'if', next: '*' },
            // Add a new line before return
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
        'lines-between-class-members': ['warn', 'always'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
