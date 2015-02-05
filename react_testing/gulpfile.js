var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('default', function(){
  return gulp.src('src/index.js')
    .pipe(webpack({
      output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('test', function(){
  return gulp.src('src/test.js')
    .pipe(webpack({
      output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build'));
});
