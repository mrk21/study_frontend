var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var revDel = require('rev-del');

gulp.task('assets', function(){
  var manifest = gulp.src('build/rev-manifest.json');
  
  return gulp.src('src/**')
    .pipe(rev())
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('build'))
    .pipe(rev.manifest())
    .pipe(revDel({dest: 'build'}))
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('html', ['assets'], function(){
  var manifest = gulp.src('build/rev-manifest.json');
  
  return gulp.src('index.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('default', ['html']);
