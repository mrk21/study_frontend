var gulp = require('gulp');
var ts = require('gulp-typescript');
var webpack = require('gulp-webpack');
var rimraf = require('rimraf');
var watch = ('gulp-watch');

gulp.task('ts', function(){
  var tsResult = gulp.src(['src/**/*.ts'])
    .pipe(ts({
      module: 'commonjs'
    }));
  return tsResult.js
    .pipe(gulp.dest('build'));
});

gulp.task('webpack', ['ts'], function(){
  return gulp.src('build/index.js')
    .pipe(webpack({
      output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function (cb) {
  rimraf('./build', cb);
});

gulp.task('default', ['webpack']);

gulp.task('watch', function(){
  return gulp.watch('src/**/*.ts', ['webpack']);
});
