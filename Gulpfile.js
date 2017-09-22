var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('app/scss/*scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload( {
  	stream: true
  }));
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/scss/*.scss', ['sass']);
	gulp.watch('app/*.html').on('change', browserSync.reload)
});

gulp.task('dist', function() {
	return gulp.src('app/css/*.css')
	.pipe(gulp.dest('dist/css'));
});

gulp.task('browserSync', function() {
  	browserSync.init( {
  		server: {
  			baseDir: 'app'
  		},
  	})
});