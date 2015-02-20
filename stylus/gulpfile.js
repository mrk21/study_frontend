var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var exec = require('gulp-exec');

gulp.task('default', function () {
  gulp.src('test.styl')
    .pipe(stylus({use: nib()}))
    .pipe(gulp.dest('build/'))
    .pipe(exec('cat <%= file.path %>'))
    .pipe(exec.reporter());
});
