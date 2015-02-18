var gulp = require('gulp');
var compass = require('gulp-compass');
var path = require('path');

gulp.task('default', function(){
  return gulp.src('test.scss')
    .pipe(compass({
      project: __dirname,
      bundle_exec: true,
      sourcemap: true,
      css: path.join(__dirname, 'build'),
      sass: __dirname
    }));
});
