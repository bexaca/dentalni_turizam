var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: './webpack/main.js',

    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.modernizrrc.js$/,
                use: [ 'modernizr-loader' ]
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                use: [ 'modernizr-loader', 'json-loader' ]
            },
        ]
    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, "path/to/.modernizrrc")
        }
    },
    plugins: [
      new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
  ]
};

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}