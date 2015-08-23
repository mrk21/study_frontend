var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')();

gulp.task('default', ['server']);

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

gulp.task('server', function(){
  gulp.watch('index.html');
  gulp.watch('app/**/*.js', ['build']);
  
  gulp.src(['.']).pipe($.webserver({
    livereload: true,
    open: true,
    middleware: [
      function(req, res, next){
        console.log(req.method, req.url);
        return next();
      }
    ]
  }));
});
