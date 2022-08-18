const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// main config
module.exports = {
    // entry: root of the bundle and beginning of dependency graph
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    // output: directory where the budled code will be exported to; common practice to put in a folder named dist
    // build step will create a series of bundled files, one for each listing in the entry object
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                // identify the types of files to progress using a regex to search for .jpg
                test: /\.jpg$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name (file) {
                                return '[path][name].[ext]'
                            },
                            // return the name of the built img file with the extension
                            publicPath: function(url) {
                                return url.replace('../', '/assets/')
                            }
                        }
                    }
                ]
            }
        ]
    },
    // plugins: direct the webpack what to do
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an html file in the dist folder
        })
    ],
    // mode: that the webpack will run. Default is to pun in production mode
    mode: 'development'
};