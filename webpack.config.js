const path = require('path');

module.exports = {
    entry: './src/spotlight.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};