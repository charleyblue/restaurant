var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Default Task");
});

gulp.task('html', function() {
  console.log('HTML Task');
});

gulp.task('styles', function() {
  console.log('CSS or SASS or Postcss Task');
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
