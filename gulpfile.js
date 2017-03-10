var gulp = require('gulp');

//plugins
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('js-compress', function(){
  return gulp.src("pre-js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest('js'));
});

gulp.task('sass', function(){
  return gulp.src("pre-css/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css"));
});

gulp.task('sass:watch', function(){
  gulp.watch('pre-css/*.scss', ['sass']);
});

gulp.task('jshint', function(){
  gulp.src('pre-js/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

gulp.task("default", ["sass:watch", "sass", "jshint", "js-compress"]);
