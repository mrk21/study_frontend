var gulp = require('gulp');
var webpack = require('gulp-webpack');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function(){
  return browserify('./src/browserify.js')
    .transform('react-jade')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('webpack', function(){
  return gulp.src('src/webpack.js')
    .pipe(webpack({
      output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          { test: /\.jade$/, loader: "react-jade-loader" }
        ]
      }
    }))
    .pipe(gulp.dest('build'));
});
