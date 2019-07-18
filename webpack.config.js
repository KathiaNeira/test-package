const path = require('path');
module.exports = {
    entry: './src/components/Datepicker/index.ts',
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',
        libraryTarget: 'commonjs2'
    },

    devtool: 'source-map',

    resolve : {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }, 

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        'react': 'commonjs react'
    },

    mode: 'development'
}