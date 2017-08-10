var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

gulp.task( 'sass', function() {
	gulp.src( 'scss/main.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( gulp.dest( './css/' ) );
});

gulp.task( 'default', function() {
	gulp.watch( 'scss/**/*.scss', ['sass'] );
});
