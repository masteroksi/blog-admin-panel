const gulp = require('gulp'),
 concat = require('gulp-concat'),
 sass = require('gulp-sass');

function js() {
    return gulp.src('./src/js/**/*.js').pipe(concat('app.js')).pipe(gulp.dest('./dist/js'))
}

function scss() {
    return gulp.src('./src/css/**/*.scss').pipe(sass()).pipe(gulp.dest('./dist/css'));
}

function copyImages() {
    return gulp.src('./src/images/**').pipe(gulp.dest('./dist/images'))
}

function copyFonts() {
    return gulp.src('./src/fonts/**').pipe(gulp.dest('./dist/fonts'))
}

function watch() {
    gulp.watch('./src/css/**/*.scss', scss);
    gulp.watch('./src/js/**/*.js', js);
}

// gulp.task('sass:watch', function () {
//     gulp.watch('./src/css/**/*.scss', ['sass']);
// });

exports.js = js;
exports.scss = scss;
exports.copyImages = copyImages;
exports.copyFonts = copyFonts;
exports.copy = gulp.series(copyImages, copyFonts);

exports.watch = watch;
exports.build = gulp.series(
    gulp.parallel(js, scss),
    copyImages,
    copyFonts
);
