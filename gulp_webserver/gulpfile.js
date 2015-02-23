var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');

var config = {
  html: {
    src: 'app/**/*.html',
  },
  javascript: {
    src: 'app/javascript/**/*.js',
  },
  stylesheet: {
    src: 'app/stylesheet/**/*.styl',
    dest: 'build/stylesheet'
  }
};

gulp.task('webserver', function(){
  gulp.src(['app','build'])
    .pipe(webserver({
      livereload: true,
      open: true,
      middleware: [
        function(req, res, next){
          console.log(req.method, req.url);
          return next();
        },
        (function(){
          var proxy = require('proxy-middleware');
          var url = require('url');
          var options = url.parse('http://api.openweathermap.org/data/2.5/weather');
          options.route = '/weather';
          return proxy(options);
        }())
      ]
    }));
});

gulp.task('stylesheet', function(){
  gulp.src(config.stylesheet.src)
    .pipe(stylus())
    .pipe(gulp.dest(config.stylesheet.dest));
});

gulp.task('watch', function(){
  gulp.watch([
    config.html.src,
    config.javascript.src,
    config.stylesheet.src
  ], ['stylesheet']);
});

gulp.task('default', ['stylesheet', 'webserver', 'watch']);
