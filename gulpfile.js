var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

/*
 |----------------------------------------------------------------------------
 | STYLES
 | ---------------------------------------------------------------------------
*/

gulp.task('styles', function() {
  return gulp.src('app/style/style.scss')
    .pipe(sass({ style: 'expanded', quiet: true }))
    .pipe(gulp.dest('app/style'));
});

/*
 |----------------------------------------------------------------------------
 | WATCH
 | ---------------------------------------------------------------------------
*/

gulp.task('watch', function() {
  gulp.run('styles');

  // Watch .scss files
  gulp.watch('app/style/**/*.scss', function() {
    gulp.run('styles');
  });
});

gulp.task('default', function() {
  gulp.run('watch');
});