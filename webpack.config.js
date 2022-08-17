const path = require('path');
const webpack = require('webpack');

// main config
module.exports = {
    // entry: root of the bundle and beginning of dependency graph
    entry: './assets/js/script.js',
    // output: directory where the budled code will be exported to; common practice to put in a folder named dist
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // plugins: direct the webpack what to do
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    // mode: that the webpack will run. Default is to pun in production mode
    mode: 'development'
};