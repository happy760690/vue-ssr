const {merge} = require('webpack-merge')
const base = require('./webpack.base')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('./util')

module.exports = merge(base, {
  entry: {
    client: resolve("../src/client-entry.js")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../public/index.html')
    })
  ],
})