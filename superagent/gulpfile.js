var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', ['server']);

gulp.task('build', function(){
  return gulp.src('index.js')
    .pipe($.webpack({
      output: {
        filename: 'bundle.js',
      }
    }))
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('server', ['node','build'], function(){
  gulp.watch('index.html');
  gulp.watch('index.js', ['node','build']);
  
  gulp.src(['.'])
    .pipe($.webserver({
      livereload: true,
      open: true
    }))
  ;
});

gulp.task('node', function(){
  gulp.src('index.js')
    .pipe($.exec('node <%= file.path %>'))
    .pipe($.exec.reporter())
  ;
});
