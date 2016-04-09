import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from 'config/webpack.config';

gulp.task('build', ['build:js','build:html']);

gulp.task('build:js', done => {
  webpack(webpackConfig, (error, stats) => {
    console.log(stats.toString({colors: true, chunks: false}));
    done();
  });
});

gulp.task('build:html', () => {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});
