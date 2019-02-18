const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'ql-platform-ui.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'qlPlatformUi',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};