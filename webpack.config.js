'use strict';

// Modules
var webpack = require('webpack');
const path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    debug: true,
    entry:  './src/app/app.js',
    output: {
          path: path.join(__dirname, 'public'),
          filename: 'bundle.js',
          publicPath : '/public/'
    },
    module : {
        preLoaders: [],
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
          }, {
          // ASSET LOADER
          // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
          // Rename the file using the asset hash
          // Pass along the updated reference to your code
          // You can add here any file extension you want to get copied to your output
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
          }, {
          // HTML LOADER
          // Allow loading html through js
            test: /\.html$/,
            loader: 'raw'
          },{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
          }

        ]
    },
    postcss :[
      autoprefixer({
        browsers: ['last 2 version']
      })
    ],
    plugins : [
      // Extract css files
      new ExtractTextPlugin('[name].[hash].css'),
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),
      // Dedupe modules in the output
      // new webpack.optimize.DedupePlugin(),
      // // Minify all javascript, switch loaders to minimizing mode
      // new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
      contentBase: './public',
      stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false
      }
    },
    devtool: "source-map",
};
