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
    extensions: ['.js', '.css', '.less', '.ejs', 'ts'],
    alias: {
      '@': path.resolve(__dirname, './packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      { 
        test: /\.(ts|js)x?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
};