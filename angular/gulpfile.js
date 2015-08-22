var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['build']);

gulp.task('build', function(){
  browserify({
    entries: './app/index.js',
    debug: true,
    paths: ['./app']
  })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'))
  ;
});
