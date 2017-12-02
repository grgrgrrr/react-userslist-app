const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.dev.js');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: 'public',
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
        chunks: false
    },
    historyApiFallback: true
});

server.listen(3000, '0.0.0.0', () => {});