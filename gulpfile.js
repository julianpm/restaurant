var gulp   = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;

gulp.task('bs', function(){
	browserSync.init({
		// proxy:'http://localhost:3000/restaurantpsd'
		server:{
			baseDir: './'
		}
	});
});

gulp.task('default', ['bs','styles', 'watch']);

gulp.task('styles', function() {
	return gulp.src('styles/**/*.scss')
		.pipe(sass({
			'sourcemap=none': true,
			errLogToConsole: true
		}))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('styles/'))
		.pipe(reload({ stream:true }));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('styles/**/*.scss', ['styles']);
	gulp.watch('**/*.php', reload);
});