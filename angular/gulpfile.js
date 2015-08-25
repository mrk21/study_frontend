var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var $ = require('gulp-load-plugins')();

gulp.task('default', ['server']);

gulp.task('build_index_js', function(){
  return gulp.src('./app/index.js.ejs')
    .pipe($.ejs({glob: glob}, {ext: ''}))
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('build', ['build_index_js'], function(){
  return browserify({
    entries: './build/index.js',
    debug: true,
    paths: ['./app']
  })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('server', ['build'], function(){
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
