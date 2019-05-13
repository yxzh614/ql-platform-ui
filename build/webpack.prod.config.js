const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {

  mode: 'production',

  entry: {
    index: './src/index.tsx',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    library: 'ql-platform-ui',
    libraryTarget: 'umd'
  },

  plugins: [
    new CleanWebpackPlugin(['lib']),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        antd: {
          name: "antd",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },

  externals: [
    {
      react: {
        amd: 'react',
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
      },
      'react-dom': {
        amd: 'react-dom',
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
      },
    },
  ],
  
  resolve: {
    extensions: ['.js', '.css', '.less', '.ts', '.tsx'],
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