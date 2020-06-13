var sass = require('gulp-sass')
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('autoprefix', () =>
    gulp.src('sass/*.scss')
        .pipe(gulp.dest('styles/'))
);


gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))

    .pipe(gulp.dest('styles/'))
});


gulp.task('watch', function(){
    gulp.watch('sass/*.scss', gulp.series('sass'));


})