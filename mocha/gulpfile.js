var gulp = require('gulp');
var mocha = require('gulp-mocha');
var espower = require('gulp-espower');

gulp.task('default', function(){
  return gulp.src('test/**/*.js')
    .pipe(espower())
    .pipe(gulp.dest('./build'))
    .pipe(mocha());
});
