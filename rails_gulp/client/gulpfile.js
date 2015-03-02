var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var revDel = require('rev-del');
var named = require('vinyl-named');
var proxy = require('proxy-middleware');
var path = require('path');
var url = require('url');
var minimist = require('minimist');
var _ = require('lodash');

var args = minimist(process.argv.slice(2));

var to_param = function(){
  return _.chain(arguments)
    .map(function(v){ return _.pairs(v); })
    .flatten()
    .map(function(v){ return v.join('='); })
    .join('&')
    .value()
  ;
};

var rails_root = path.join(__dirname, '../public');

var ts_config = {
  module: 'commonjs',
  noImplicitAny: true
};

var webpack_config = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['','.ts','.js']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'webpack-espower!ts?'+ to_param(ts_config, {sourceMap: true})}
    ]
  }
};

gulp.task('default', ['build']);
gulp.task('build', ['js','css','node']);

gulp.task('js', function(){
  return gulp.src('src/index.ts')
    .pipe($.webpack(_.merge(webpack_config, {
      output: {
        filename: 'bundle.js',
      }
    })))
    .pipe(gulp.dest('build/assets/javascripts'))
  ;
});

gulp.task('css', function(){
  return gulp.src('src/index.styl')
    .pipe($.rename('bundle.css'))
    .pipe($.sourcemaps.init())
    .pipe($.stylus())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('build/assets/stylesheets'))
  ;
});

gulp.task('node', function(){
  return gulp.src(['src/**/*.ts', 'test/**/*.ts'], {base: '.'})
    .pipe($.sourcemaps.init())
    .pipe($.typescript(_.merge(ts_config, {
      module: 'commonjs',
      sourceRoot: __dirname + '/src'
    }))).js
    .pipe($.espower())
    .pipe($.insert.prepend("require('source-map-support').install();"))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('build/node'))
  ;
});

gulp.task('karma', function(){
  return gulp.src('test/unit/**/*.ts')
    .pipe(named())
    .pipe($.webpack(webpack_config))
    .pipe(gulp.dest('build/karma'))
  ;
});

gulp.task('clean', function(done){
  del([
    'build',
    path.join(rails_root, 'index.html'),
    path.join(rails_root, 'assets'),
  ], {force: true}, done);
});

gulp.task('install', ['js','css'], function(done){
  var dest = path.join(rails_root, 'assets');
  var manifest = path.join(dest, 'rev-manifest.json');
  
  gulp.src('build/assets/**/*')
    .pipe($.rev())
    .pipe($.revReplace({manifest: gulp.src(manifest)}))
    .pipe(gulp.dest(dest))
    .pipe($.rev.manifest())
    .pipe(revDel({dest: dest, force: true}))
    .pipe(gulp.dest(dest))
    .on('end', function(){
      gulp.src('src/index.html')
        .pipe($.revReplace({manifest: gulp.src(manifest)}))
        .pipe(gulp.dest(rails_root))
        .on('end', done)
      ;
    });
  ;
});

gulp.task('test', ['node'], function(){
  var options = {};
  if (args.grep) options.grep = args.grep;
  if (args.watch) {
    gulp.watch('test/unit/**/*.ts', ['test']);
  }
  
  gulp.src('build/node/test/unit/**/*.js')
    .pipe($.mocha(options))
  ;
});


gulp.task('browser-test', ['karma'], function(){
  var action = 'run';
  if (args.watch) {
    action = 'watch';
    gulp.watch('test/unit/**/*.ts', ['karma']);
  }
  
  gulp.src('build/karma/**/*.js')
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: action
    }))
  ;
});

gulp.task('server', ['js','css'], function(){
  gulp.watch('src/**/*.html');
  gulp.watch('src/**/*.styl', ['css']);
  gulp.watch('src/**/*.ts', ['js']);
  
  gulp.src(['src','build'])
    .pipe($.webserver({
      livereload: true,
      open: true,
      middleware: [
        function(req, res, next){
          console.log(req.method, req.url);
          return next();
        },
        (function(){
          var options = url.parse('http://localhost:3000/api');
          options.route = '/api';
          return proxy(options);
        }())
      ]
    }));
});
