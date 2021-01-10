const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/canvasElements.ts'),
    output: {
        filename: 'index.js',
        path: __dirname,
        library: "CE",
        libraryExport: 'default'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};