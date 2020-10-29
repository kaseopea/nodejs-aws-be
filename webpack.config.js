const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: slsw.lib.entries,
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    optimization: {
        minimize: false
    },
    target: 'node',
    // externals: [nodeExternals({
    //     modulesDir: path.resolve(__dirname, 'node_modules'),
    //     allowlist: [
    //         'source-map-support'
    //     ]
    // })],
    devtool: 'nosources-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components.)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};