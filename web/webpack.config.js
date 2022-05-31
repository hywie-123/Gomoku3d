const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/index.tsx'),
        play: path.resolve(__dirname, 'src/play.ts'),
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                include: path.resolve(__dirname, 'src/'),
                test: /\.tsx?$/,
                use: [
                    { loader: 'ts-loader', options: { transpileOnly: true } }
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    externals: {
        'three': 'THREE',
        'react': 'React',
        'react-dom' : 'ReactDOM',
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    }
};
