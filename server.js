var path = require('path');
var app = require('express')();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.dev');

app.use(webpackDevMiddleware(webpack(config), {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(config.port, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + config.port);
});