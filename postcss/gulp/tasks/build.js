import gulp from 'gulp';
import webpack from 'webpack';
import postcss from 'gulp-postcss'
import cssnext from 'postcss-cssnext';
import myPlugin from '../../src/postcss/my_plugin';
import webpackConfig from '../../config/webpack.config';

gulp.task('build', ['build:js', 'build:css', 'build:html']);

gulp.task('build:js', done => {
  webpack(webpackConfig, (error, stats) => {
    console.log(stats.toString({ colors: true, chunks: false }));
    done();
  });
});

gulp.task('build:html', () =>
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
);

gulp.task('build:css', () =>
  gulp.src('src/**/*.css')
    .pipe(postcss([cssnext, myPlugin]))
    .pipe(gulp.dest('dist'))
);
