var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var exec = require('gulp-exec');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function(){
  gulp.src('test.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({use: nib()}))
    // show converted css
    .pipe(gulp.dest('./build'))
    .pipe(exec('cat <%= file.path %>'))
    .pipe(exec.reporter())
    // output external sourcemap
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build'))
  ;
});
