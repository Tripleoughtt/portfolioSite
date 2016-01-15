var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulp_jspm = require('gulp-jspm');
var addsrc = require('gulp-add-src');
var rimraf = require('rimraf');
var sass = require('gulp-sass')

gulp.task('serve', function(cb){  
  browserSync.init({
    server: "./"
  })

  gulp.watch('./build/styles/**/*').on('change', browserSync.reload)
  gulp.watch('./**/*.html').on('change', browserSync.reload)
  gulp.watch('./build/main.bundle.js').on('change', browserSync.reload)
});

gulp.task('sass', ["clean", 'posts'], function(){
  gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
});
gulp.task('posts', function(){
  gulp.src('./posts/**/*')
    .pipe(gulp.dest('./build/posts'))
})


gulp.task('jspm-build', ['sass'], function(cb){
  return gulp.src('lib/main.js')
    .pipe(gulp_jspm({selfExecutingBundle : true}))
    .pipe(gulp.dest('build/', cb))
});

gulp.task('clean', function(cb){
  rimraf('/build', cb)
});

gulp.task('watch', function() {
  gulp.watch('lib/**/*', ['jspm-build'])
  gulp.watch('sass/**/*', ['jspm-build'])
});

gulp.task('default', ['jspm-build', 'serve','watch'])
