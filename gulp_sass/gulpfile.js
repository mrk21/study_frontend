var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
  return gulp.src('test.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'));
});
