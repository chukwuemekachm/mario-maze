const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.join(__dirname, '../dist');
const SRC_DIR = './src';

module.exports = {
  entry: `${SRC_DIR}/index.ts`,
  output: {
    path: DIST_DIR,
    filename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [SRC_DIR, 'node_modules'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['src/styles'],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};
