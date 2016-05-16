import gulp from 'gulp';
import postcss from 'gulp-postcss'
import cssnext from 'postcss-cssnext';
import myPlugin from '../../src/postcss/my_plugin';

gulp.task('build', ['build:css','build:html']);

gulp.task('build:html', () =>
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
);

gulp.task('build:css', () =>
  gulp.src('src/**/*.css')
    .pipe(postcss([cssnext, myPlugin]))
    .pipe(gulp.dest('dist'))
);
