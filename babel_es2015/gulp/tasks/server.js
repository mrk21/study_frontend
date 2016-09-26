/* eslint import/no-extraneous-dependencies: 0 */

import gulp from 'gulp';
import browserSync from 'browser-sync';

const server = browserSync.create();

gulp.task('server', ['lint', 'build'], () => {
  server.init({
    port: 8000,
    browser: 'Google Chrome',
    server: {
      always: 'index.html',
      baseDir: 'dist',
    },
  });

  gulp.watch('src/**', () => {
    gulp.start('lint');
    gulp.start('build', () => {
      server.reload();
    });
  });
});
