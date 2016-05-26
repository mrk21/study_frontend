import gulp from 'gulp';
import browserSync from 'browser-sync';

const server = browserSync.create();

gulp.task('server', ['build'], () => {
  server.init({
    port: 8000,
    browser: 'Google Chrome',
    server: {
      always: 'index.html',
      baseDir: 'dist'
    }
  });
  
  gulp.watch('src/**', () => {
    gulp.start('build', () => {
      server.reload();
    });
  });
});
