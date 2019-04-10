const {
    resolve
} = require('path');
const { dependencies } = require('../package.json')
const webpack = require('webpack');

const loaderInclude = [
    resolve(__dirname, '../renderer'),
    resolve(__dirname, '../test'),
    resolve(__dirname, '../mocker'),
    resolve(__dirname, '../node_modules/element-ui/')
]

module.exports = {
    target: 'electron-main',
    node: {
        __dirname: false
      },
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "./[name].js",
    },
    externals: [
        (function () {
            var IGNORES = [
              'electron'
            ];
            return function (context, request, callback) {
              if (IGNORES.indexOf(request) >= 0) {
                return callback(null, "require('" + request + "')");
              }
              return callback();
            };
          })()
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
                include:loaderInclude
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(require('./release.env.json'))
    ]
}