const path = require('path')
const vueLoader = require('vue-loader/lib/plugin')
const {resolve} = require('./util')

module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: resolve("../dist")
  },
  resolve: {
    extensions: [".js", ".vue", ".html"]
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      }],
      exclude: /node_modules/
    },{
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader']
    },{
      test: /\.vue$/,
      use: ['vue-loader']
    }
  ]
  },
  plugins: [
    new vueLoader(),
  ]
}