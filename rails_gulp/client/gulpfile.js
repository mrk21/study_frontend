var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');
var es = require('event-stream');
var path = require('path');
var del = require('del');
var _ = require('lodash');

var to_param = function(){
  return _.chain(arguments)
    .map(function(v){ return _.pairs(v); })
    .flatten()
    .map(function(v){ return v.join('='); })
    .join('&')
    .value()
  ;
};

var rails_root = path.join(__dirname, '../public');

var ts_config = {
  module: 'commonjs',
  noImplicitAny: true
};

var webpack_config = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['','.ts','.js']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts?'+ to_param(ts_config, {sourceMap: true})}
    ]
  }
};

gulp.task('build', ['js','css']);

gulp.task('js', function(){
  return gulp.src('src/index.ts')
    .pipe(webpack(_.merge(webpack_config, {
      output: {
        filename: 'bundle.js',
        publicPath: 'build/assets/javascripts'
      }
    })))
    .pipe(gulp.dest('build/assets/javascripts'))
  ;
});

gulp.task('css', function(){
  return gulp.src('src/index.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('build/assets/stylesheets'))
  ;
});

gulp.task('export', ['build'], function(){
  return es.merge(
    gulp.src('src/index.html')
      .pipe(gulp.dest(rails_root))
    ,
    gulp.src('build/assets/**/*')
      .pipe(gulp.dest(path.join(rails_root, 'assets')))
  );
});

gulp.task('clean', function(next){
  return del([
    'build',
    path.join(rails_root, 'index.html'),
    path.join(rails_root, 'assets'),
  ], {force: true}, next);
});

gulp.task('watch', ['build'], function(){
  gulp.watch('src/**/*.html');
  gulp.watch('src/**/*.styl', ['css']);
  gulp.watch('src/**/*.ts', ['js']);
});

gulp.task('server', ['watch'], function(){
  return gulp.src(['src','build'])
    .pipe(webserver({
      livereload: true,
      open: true,
      middleware: [
        function(req, res, next){
          console.log(req.method, req.url);
          return next();
        },
        (function(){
          var proxy = require('proxy-middleware');
          var url = require('url');
          var options = url.parse('http://localhost:3000/api');
          options.route = '/api';
          return proxy(options);
        }())
      ]
    }));
});

gulp.task('default', ['server']);
