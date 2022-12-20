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
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: 'production',
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
