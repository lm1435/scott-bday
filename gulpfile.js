var gulp = require('gulp');

//plugins
var plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint');

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

gulp.task('jshint', function(){
  gulp.src('pre-js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

gulp.task('watch', function(){
  gulp.watch('pre-css/*.scss', ['sass']);
  gulp.watch('pre-js/*.js', ['js-compress']);
});

gulp.task("default", ["watch", "sass", "jshint", "js-compress"]);
