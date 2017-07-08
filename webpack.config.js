const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/app.jsx'),
    output: {
        path: path.join(__dirname, '/dist/js'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, '/src'),
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }],
    },
    watch: true
}