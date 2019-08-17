const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, '../public'),
    publicPath: '/',
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    }
  }
}
