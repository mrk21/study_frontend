var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rimraf = require('rimraf');

gulp.task('build', function(){
  return gulp.src('./src/index.ts')
    .pipe(webpack({
      output: {
          filename: 'bundle.js',
          publicPath: '/build/'
      },
      resolve: {
          extensions: ['','.ts','.js']
      },
      devtool: 'source-map',
      module: {
          loaders: [
            {test: /\.ts$/, loader: 'ts?sourceMap=true&noImplicitAny=true!ts-jsx'}
          ]
      }
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function (cb) {
  rimraf('./build', cb);
});

gulp.task('default', ['build']);

gulp.task('watch', function(){
  return gulp.watch('src/**/*.ts', ['build']);
});
