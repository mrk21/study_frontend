import path from 'path';

export default {
  entry: './src/index.js',
  cache: true,
  display: {
    errorDetails: true,
  },
  output: {
    filename: './dist/app.js',
  },
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: false,
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    root: [
      path.resolve('src'),
      path.resolve('test'),
    ],
    extensions: ['', '.js'],
  },
  plugins: [],
};
