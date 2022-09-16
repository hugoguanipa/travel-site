const currentTask = process.env.npm_lifecycle_event
const path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let cssConfig = {
    test: /\.css$/i,
    use: ['css-loader', 'postcss-loader']
}

let config = {
    entry: './app/assets/scripts/App.js',
    plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './app/index.html'})],
    module: {
        rules: [
            cssConfig
        ]
    }
}

if(currentTask == 'dev') {
    cssConfig.use.unshift('style-loader')
    config.output = {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app')
    }
    config.devServer = {
        watchFiles: ('./app/**/*.html'),
        static: {
            directory: path.join(__dirname, 'app'),
        },
        compress: true,
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    }
    config.mode = 'development'

} 

if(currentTask == 'build') {
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
        filename: 'bundle/[name].js',
        path: path.resolve(__dirname, 'dist')
    }
    config.mode = 'production'
    config.optimization = {
        splitChunks: {chunks: 'all'}
    }
    config.plugins.push(new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}))
} 

module.exports = config