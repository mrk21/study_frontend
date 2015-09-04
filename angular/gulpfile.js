var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var karma = require('karma');
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

gulp.task('spec', ['build'], function(done){
  gulp.watch('app/**/*.js', ['build']);
  
  new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
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
      },
      function(req, res, next){
        var self = this;
        if (!self.todos) self.todos = [];
        
        if (req.url == '/api/todos') {
          switch (req.method) {
          case 'GET':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(self.todos));
            res.end();
            return;
          case 'POST':
            req.on('data', function(data){
              var json = data.toString();
              var obj = JSON.parse(json)
              self.todos.push(obj);
              res.writeHead(200, {'Content-Type': 'application/json'});
              res.write(json);
              res.end();
            });
            return;
          }
          return;
        }
        
        var matches = req.url.match(new RegExp('/api/todos/(\\d+)'));
        if (matches) {
          var id = matches[1];
          
          switch (req.method) {
          case 'DELETE':
            for (var i=0; i < self.todos.length; i++) {
              if (self.todos[i].id == id) {
                var todo = self.todos[i]
                self.todos.splice(i,1);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(todo));
                res.end();
                return;
              }
            }
            return;
          }
          return;
        }
        
        return next();
      }
    ]
  }));
});
