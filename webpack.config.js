const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Output Management',
        })
    ],

    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    optimization: {
        runtimeChunk: 'single'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    }
}
