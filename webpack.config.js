const webpack = require("webpack");
const folder = __dirname;
const dev = process.env.NODE_ENV === "dev"
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

let pathsToClean = [
  './build/assets/*.*'
]

let cleanOptions = {
  root:     folder,
  exclude:  ['common.js'],
  verbose:  true,
  dry:      false
}


let cssLoaders = [
    { loader: 'css-loader', options: { importLoaders: 1, minimize: !dev } }
]

if(!dev){
    cssLoaders.push({
        loader: 'postcss-loader', options :{
            plugins: (loader) => [
                require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie > 8']
                }),
            ]
        }
    })
}

let config = {
     entry: './dev/jQuery.pictures.views.js',
     watch: dev,
     output: {
         path: folder+'/build/assets',
         filename: 'jQuery.pictures.views.pack.js',
         publicPath: "/build/assets/"
     },
     devtool: dev ? "cheap-module-eval-source-map" : false,
     module: {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: cssLoaders
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ ...cssLoaders, 'sass-loader' ]
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins:[

        new ExtractTextPlugin({
            filename: '[name].css',
            disable: dev
        }),
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]

 };

 if(!dev){
    config.plugins.push(new UglifyJSPlugin({
        sourceMap: false
    }))
 }

module.exports = config;
