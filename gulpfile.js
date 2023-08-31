
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

sass.compiler = require('node-sass');
gulp.task('sass', function () {
   return gulp.src('./scss/styles.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'))
   .pipe(connect.reload())
});

gulp.task('connect', function(done) {
    connect.server({
        livereload: true
    });
    done();
});

gulp.task('html', function () {
    gulp.watch('*.html', function() {
        connect.reload();
    });
});
gulp.task('watch', function () {
    gulp.watch('scss/*.scss', gulp.series('sass'));
})

gulp.task('default', gulp.series('sass', 'connect', 'watch'));
