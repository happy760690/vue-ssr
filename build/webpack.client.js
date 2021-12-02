const {merge} = require('webpack-merge')
const base = require('./webpack.base')
const clientRenderPlugin = require('vue-server-renderer/client-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('./util')

module.exports = merge(base, {
  entry: {
    client: resolve("../src/client-entry.js")
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new clientRenderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../public/index.html')
    })
  ],
})