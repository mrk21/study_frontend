import gulp from 'gulp';
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer';

gulp.task('build', ['build:css','build:html']);

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
