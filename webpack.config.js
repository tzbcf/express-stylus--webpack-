var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ["./app.js"]
    },
    output: { //输出目录
        path: __dirname + './public',
        publicPath: "",
        filename: 'shared.js',
        chunkFilename: '[name].[chunkhash:3].min.js',
    },
    module: { //在配置文件里添加JSON loader
        rules: [
            {
            test: /\.styl$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'stylus'])
        },
            {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }]
    },
    resolve: {
        //extensions: ['', '.js', '.json'],
        extensions: ['.js', '.json'],//webpack 2.0以上的配置 2017-11-03改
    },
    postcss: [
        require('autoprefixer') //调用autoprefixer插件,加入各个浏览器的前缀
    ],
    plugins: [
        new ExtractTextPlugin('css'), //css随机数
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.NoErrorsPlugin()
    ]
};