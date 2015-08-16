var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['build']);

gulp.task('build', function(){
  browserify({entries: './src/index.js', debug: true})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'))
  ;
});
