var gulp = require('gulp');
var browserify = require('browserify');
var watch = ('gulp-watch');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('default', function(){
  return browserify('./index.js')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  return gulp.watch('*.js', ['default']);
});
