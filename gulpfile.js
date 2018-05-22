const gulp = require ('gulp');

const sass = require ('gulp-sass');

gulp.task('copyHTML', function () {
  return gulp.src('*.html')
     .pipe(gulp.dest('portfolio/html'))
})

gulp.task('copyCSS', function () {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('portfolio'))
})
