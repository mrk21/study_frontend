/* eslint import/no-extraneous-dependencies: 0 */

import gulp from 'gulp';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';

gulp.task('lint', () =>
  gulp.src([
    'src/**/*.js',
    'gulpfile.babel.js',
    'gulp/**/*.js',
    'config/**/*.js',
  ])
    .pipe(plumber({
      errorHandler: error => {
        console.error(`[task] eslint ${error.plugin}\n${error.message}`);
      },
    }))
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(plumber.stop())
);
