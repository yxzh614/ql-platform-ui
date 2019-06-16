

const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const rootDir = path.resolve(__dirname, '../')
const componentDir = 'src/components'
const cModuleNames = fs.readdirSync(path.resolve(componentDir))

const cModuleMap = cModuleNames.reduce((prev, name) => {
  prev[name] = path.join(rootDir, `${componentDir}/${name}/index.tsx`);

  return prev;
}, {})

module.exports = {

  mode: 'production',

  entry: {
    index: './src/index.tsx',
    ...cModuleMap
  },

  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, '../lib'),
    library: ['ql-platform-ui', '[name]'],
    libraryTarget: 'umd'
  },

  plugins: [
    new CleanWebpackPlugin(['lib'], {
      root: path.resolve(__dirname, '../'),   //指定根目录，否则无法清理上层目录
      verbose: true,        　　　　　　　　　　//开启在控制台输出信息
    })
  ],
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
    extensions: ['.ts', '.tsx', '.js', '.css', '.less'],     // 定义在该数组中的文件后缀不需要显示给出
    mainFiles: ['index', 'index.tsx'],
    alias: {
      '@': path.resolve(__dirname, './packages')
    }
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
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