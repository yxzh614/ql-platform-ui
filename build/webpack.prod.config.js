const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'ql-platform-ui',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(['lib'])
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
};