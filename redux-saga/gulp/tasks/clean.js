import gulp from 'gulp';
import del from 'del';

gulp.task('clean', done => {
  return del(['dist'], done);
});
