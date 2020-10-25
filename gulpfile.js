let gulp = require('gulp'),
    purgecss = require('gulp-purgecss');

gulp.task('purgecss', () => {
    return gulp
        .src('./src/css/*.css')
        .pipe(
            purgecss({
                content: ['./src/html/*.html']
            })
        )
        .pipe(gulp.dest('./build/'))
})
