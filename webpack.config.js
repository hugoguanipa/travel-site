const path = require("path");

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        watchFiles: ('./app/**/*.html'),
        static: {
            directory: path.join(__dirname, 'app'),
        },
        compress: true,
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    }
}