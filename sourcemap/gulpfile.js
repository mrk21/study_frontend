var gulp = require('gulp');
var ts = require('gulp-typescript');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var _ = require('lodash');

var ts_config = {
  noImplicitAny: true
};

var to_param = function(){
  return _.chain(arguments)
    .map(function(v){ return _.pairs(v); })
    .flatten()
    .map(function(v){ return v.join('='); })
    .join('&')
    .value()
  ;
};

gulp.task('typescript', function(){
  gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(_.merge(ts_config, {
      module: 'commonjs',
      sourceRoot: __dirname + '/src'
    }))).js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/src'))
  ;
});

gulp.task('stylus', function(){
  gulp.src('src/**/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/src'))
  ;
});

gulp.task('webpack', function(){
  gulp.src('src/index.ts')
    .pipe(webpack({
      output: {
        filename: 'bundle.js',
        publicPath: '/build/webpack'
      },
      devtool: 'source-map',
      resolve: {
        extensions: ['','.ts','.js']
      },
      module: {
        loaders: [
          {test: /\.ts$/, loader: 'ts?'+ to_param(ts_config, {sourceMap: true})}
        ]
      }
    }))
    .pipe(gulp.dest('build/webpack'))
  ;
});

gulp.task('browserify', function(){
  browserify({entries: './src/index.ts', debug: true})
    .plugin('tsify', ts_config)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build/browserify'))
  ;
});

gulp.task('default', ['typescript','stylus','webpack','browserify']);
