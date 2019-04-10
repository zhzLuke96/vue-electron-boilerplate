const {
    resolve
} = require('path');
const { dependencies } = require('../package.json')
const webpack = require('webpack');

module.exports = {
    target: 'electron-renderer',
    devtool: '#cheap-module-eval-source-map',
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "./[name].js",
    },
    externals: [
        ...Object.keys(dependencies || {})
      ],
    entry: {
        main: resolve(__dirname, "../main/main.js")
    },
    resolve: {
        extensions: ['.es6','.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(require('./dev.env.json'))
    ]
}