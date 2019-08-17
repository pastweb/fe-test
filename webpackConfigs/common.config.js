const path = require('path')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      }
    ]
  }
}
