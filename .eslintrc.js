module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'quote-props': [
            'off',
        ],
        'semi': [
            'error',
            'always',
        ],
        'no-console': 'error',
        // Strict mode
        'strict': [
            'error',
            'never',
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true,
            },
        ],
        'no-alert': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'block-scoped-var': 'error',
        'camelcase': [
            'error',
            {
                'properties': 'never',
            },
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        'comma-style': [
            'error',
            'last',
        ],
        'eol-last': 'error',
        'func-names': 'off',
        'jsx-quotes': [
            'error',
            'prefer-double',
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true,
            },
        ],
        'new-cap': [
            'off',
            {
                'newIsCap': true,
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
            },
        ],
        'no-array-constructor': 'error',
        'no-nested-ternary': 'off',
        'import/no-unresolved': 'off',
        'no-new-object': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-extra-parens': [
            'error',
            'functions',
        ],
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        'no-useless-escape': 'off',
        'one-var': [
            'error',
            'never',
        ],
        'arrow-spacing': 'error',
        'padded-blocks': [
            'error',
            {
                'classes': 'never',
                'blocks': 'never',
                'switches': 'never',
            },
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            'never',
        ],
        'space-infix-ops': 'error',
        'switch-colon-spacing': [
            'error',
            {
                'after': true,
                'before': false,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            },
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                'exceptions': [
                    '-',
                    '+',
                ],
                'markers': [
                    '=',
                    '!',
                ],
            },
        ],
        'consistent-return': 'error',
        'curly': [
            'error',
            'multi-line',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'default-case': 'error',
        'dot-notation': [
            2,
            {
                'allowKeywords': true,
            },
        ],
        'guard-for-in': 'error',
        'no-with': 'error',
        'no-return-assign': 'error',
        'no-redeclare': 'error',
        'no-proto': 'error',
        'no-caller': 'error',
        'no-else-return': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-multi-spaces': 'error',
        'radix': 'error',
        // React
        'react/display-name': 'off',
        'react/jsx-boolean-value': [
            'error',
            'always',
        ],
        'react/jsx-curly-spacing': 'warn',
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-sort-prop-types': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'warn',
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-max-props-per-line': [2,
            {
                'maximum': 1,
                'when': 'always',
            },
        ],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-closing-bracket-location': [
            2,
            'tag-aligned',
        ],
        'react/no-danger': 'off',
        'react/no-set-state': 'off',
        'react/no-did-mount-set-state': 'warn',
        'react/no-did-update-set-state': 'warn',
        'react/no-multi-comp': [
            'error',
            {
                'ignoreStateless': true,
            },
        ],
        'react/no-unknown-property': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'warn',
        'react/sort-comp': [
            'error',
            {
                'order': [
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
                'groups': {
                    'static-methods': [
                        'displayName',
                        'propTypes',
                        'defaultProps',
                        '/^((?!propTypes|defaultProps).)*$/',
                    ],
                    'lifecycle': [
                        'displayName',
                        'propTypes',
                        'defaultProps',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'constructor',
                        'getDefaultProps',
                        'state',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                },
            },
        ],
        'react/jsx-wrap-multilines': ['error', {
            'declaration': 'parens-new-line',
            'assignment': 'parens-new-line',
            'return': 'parens-new-line',
            'arrow': 'parens-new-line',
            'condition': 'parens-new-line',
            'logical': 'ignore',
            'prop': 'ignore',
        }],
        // Typescript
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'comma',
                    'requireLast': true,
                },
                'singleline': {
                    'delimiter': 'comma',
                    'requireLast': true,
                },
                'overrides': {
                    'interface': {
                        'multiline': {
                            'delimiter': 'none',
                            'requireLast': true,
                        },
                    },
                },
            },
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                'SwitchCase': 0,
            },
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        '@typescript-eslint/no-var-requires': [
            0,
        ],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'ignoreRestSiblings': true,
            },
        ],
    },
};
