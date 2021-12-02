const {merge} = require('webpack-merge')
const base = require('./webpack.base')
const ServerRenderPlugin = require('vue-server-renderer/server-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('./util')

module.exports = merge(base, {
  entry: {
    server: resolve("../src/server-entry.js")
  },
  target: 'node', // Used for node
  output: {
    libraryTarget: 'commonjs2' // The final result of the file is placed on module.exoprt
  },
  plugins: [
    new ServerRenderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.ssr.html',
      template: resolve('../public/index.ssr.html'),
      minify: {
        removeComments: false,
      },
      excludeChunks: ['server'] // Exclusion module
    })
  ],
})