var gulp = require('gulp');

//plugins
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('js-compress', function(){
  return gulp.src("pre-js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest('js'));
});

gulp.task('sass', function(){
  gulp.src("pre-css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
});


gulp.task("default", ["js-compress", "sass"]);
