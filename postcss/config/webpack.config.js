import webpack from 'webpack';
import postcssImport from 'postcss-import';
import postcssCssnext from 'postcss-cssnext';
import path from 'path';

export default {
  entry: './src/index.js',
  cache: true,
  display: {
    errorDetails: true
  },
  output: {
    filename: './dist/app.js'
  },
  module: {
    loaders: [
      // javascripts
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // stylesheets
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?importLoaders=1',
          'postcss',
        ],
      },
    ],
  },
  resolve: {
    root: [
      path.resolve('src'),
      path.resolve('test')
    ],
    extensions: ['', '.js', '.css']
  },
  postcss: [
    postcssImport(),
    postcssCssnext(),
  ],
  plugins: []
};
