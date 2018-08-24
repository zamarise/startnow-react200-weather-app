require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  context: path.join(__dirname, '/src'),

  plugins: [new Dotenv(), new EnvironmentPlugin({ ...process.env })],

  entry: {
    javascript: './js/index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
