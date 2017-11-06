var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
gulp.src('first/*.css')
.pipe(autoprefixer())
.pipe(gulp.dest('build'))
});