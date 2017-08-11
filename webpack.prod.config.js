var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/index');
var PUBLIC_PATH = path.resolve(ROOT_PATH, 'public');
var INDEX_PATH = path.resolve(PUBLIC_PATH, 'index.html');

var config = {
    entry: [
        APP_PATH
    ],
    output: {
        path: PUBLIC_PATH,
        filename: "[name].[hash:8].js",
        publicPath: '/'
    },

    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].[hash:8].css'),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: INDEX_PATH,
            path: PUBLIC_PATH,
            filename: 'index.html'
        }),
    ],

    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }]
        }, {
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract(
                'css-loader!sass-loader'
            )
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'css-loader!sass-loader'
            )
        }, {
            test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/i,
            use: ['file-loader']
        }]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
}

module.exports = config;
