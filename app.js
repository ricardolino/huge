var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');

var config = require('./webpack.prod.config.js');
var logger = require('morgan');
var path = require('path');
var api = require('./api');

var compiler = webpack(config);
var app = express();

app.use(logger('dev'));
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use('/api', api);

module.exports = app;