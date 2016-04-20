import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from 'config/webpack.config';
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer';

gulp.task('build', ['build:js','build:css','build:html']);

gulp.task('build:js', done => {
  webpack(webpackConfig, (error, stats) => {
    console.log(stats.toString({colors: true, chunks: false}));
    done();
  });
});

gulp.task('build:html', () =>
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
);

gulp.task('build:css', () =>
  gulp.src('src/**/*.css')
    .pipe(postcss([
      autoprefixer({browsers: ['last 1 versions', 'ie >= 10']})
    ]))
    .pipe(gulp.dest('dist'))
);
