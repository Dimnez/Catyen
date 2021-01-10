const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/canvasElements.ts'),
    output: {
        filename: 'dist/canvasElements-0.01.js',
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