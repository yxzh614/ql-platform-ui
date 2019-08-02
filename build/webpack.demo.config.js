const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './demo/demo.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css', '.less'],     // 定义在该数组中的文件后缀不需要显示给出
      mainFiles: ['index']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'demo'
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map',
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
  }
};