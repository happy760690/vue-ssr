const path = require('path')
const vueLoader = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'development',
  entry: resolve("./src/client-entry.js"),
  output: {
    filename: 'bundle.js',
    path: resolve("./dist")
  },
  resolve: {
    extensions: [".js", ".vue"]
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html')
    })
  ]
}