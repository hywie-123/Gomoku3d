const path = require('path');

const PATH_ENTRY = path.resolve(__dirname, 'src/play.ts');
const PATH_SRC   = path.resolve(__dirname, 'src');
const PATH_OUT   = path.resolve(__dirname, 'public');

module.exports = {
    mode: 'development',
    entry: PATH_ENTRY,
    output: { path: PATH_OUT, filename: 'play.bundle.js' },
    module: {
        rules: [
            {
                include: PATH_SRC, test: /\.ts$/, use: [
                    { loader: 'ts-loader', options: { transpileOnly: true } }
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    externals: {
        three: 'THREE',
    },
    devServer: {
        static: PATH_OUT,
    }
};
