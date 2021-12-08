const { DefinePlugin } = require('webpack');
const CracoAlias = require('craco-alias');

module.exports = {
    webpack: {
        plugins: {
            add: [
                new DefinePlugin({
                    develMode: process.env.NODE_ENV === 'development',
                }),
            ],
        },
    },
    babel: {
        plugins: [
            'babel-plugin-macros',
            [
                '@emotion/babel-plugin-jsx-pragmatic',
                {
                    export: 'jsx',
                    import: '__cssprop',
                    module: '@emotion/react',
                },
            ],
            [
                '@babel/plugin-transform-react-jsx',
                {
                    pragma: '__cssprop',
                    pragmaFrag: 'React.Fragment',
                },
            ],
        ],
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: './src',
                /* tsConfigPath should point to the file where "baseUrl" and "paths"
                are specified*/
                tsConfigPath: './tsconfig.paths.json',
            },
        },
    ],
};
