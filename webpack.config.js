'use strict';

// Modules
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require("compression-webpack-plugin");

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
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
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

      new Dotenv({
        path: './.env', // Path to .env file (this is the default)
        safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
      }),

      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),
      // // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        sourceMap: false,
        compress: {
          warnings: false, // Suppress uglification warnings
          pure_getters: false,
          unsafe: true,
          unsafe_comps: true,
          screw_ie8: true
        },
        output: {
          comments: false,
        },
        exclude: [/\.min\.js$/gi] // skip pre-minified libs
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
      new webpack.NoErrorsPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0
      })
    ],
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    node: {
      console: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    devServer: {
      contentBase: './public',
      stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false
      }
    },
    // devtool: "cheap-module-source-map",
    devtool: "cheap-module-source-map"
};
