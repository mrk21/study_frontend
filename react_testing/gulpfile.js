var gulp = require('gulp');
var webpack = require('gulp-webpack');
var exec = require('gulp-exec');

var jsx = function(){
  var jsxLoader = require('ts-jsx-loader');
  var gutil = require('gulp-util');
  var through = require('through2');
  
  var context = {
    query: '',
    cacheable: function(){},
    emitError: function(e){ throw e; }
  };
  
  function transform(file, encoding, callback){
    var result = jsxLoader.call(context, file.contents.toString('utf8'));
    var output = new gutil.File({
      cwd: file.cwd,
      base: file.base,
      path: file.path
    });
    output.contents = new Buffer(result);
    this.push(output);
    return callback();
  }
  
  function flush(callback){
    return callback();
  }
  
  return through.obj(transform, flush);
};

gulp.task('default', function(){
  return gulp.src('src/index.js')
    .pipe(webpack({
      output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {test: /\.js$/, loader: 'ts-jsx'}
        ]
      }
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('build_test', function(){
  return gulp.src('src/**/*.js')
    .pipe(jsx())
    .pipe(gulp.dest('build'));
});

gulp.task('test', ['build_test'], function(){
  return gulp.src('build/test.js')
    .pipe(exec('node <%= file.path %>'))
    .pipe(exec.reporter());
});
