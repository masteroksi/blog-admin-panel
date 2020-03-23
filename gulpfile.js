const gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    ejs = require('gulp-ejs'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');

function server() {
    return connect.server({
        root: 'dist',
        livereload: true,
    });
}

function template() {
    return gulp.src('./src/template/*.ejs')
        .pipe(ejs())
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
}

function js() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());

}

function scss() {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());

}

function copyImages() {
    return gulp.src('./src/images/**')
        .pipe(gulp.dest('./dist/images'));
}

function copyFonts() {
    return gulp.src('./src/fonts/**')
        .pipe(gulp.dest('./dist/fonts'));
}

function watch() {
    copyImages();
    copyFonts();
    scss();
    js();
    template();

    gulp.watch('./src/css/**/*.scss', scss);
    gulp.watch('./src/js/**/*.js', js);
    gulp.watch('./src/template/**/*.ejs', template);
    server();
}

// gulp.task('sass:watch', function () {
//     gulp.watch('./src/css/**/*.scss', ['sass']);
// });

exports.js = js;
exports.scss = scss;
exports.copyImages = copyImages;
exports.copyFonts = copyFonts;
exports.copy = gulp.series(copyImages, copyFonts);
exports.tmp = template;
exports.s = server;


exports.watch = watch;
exports.build = gulp.series(
    gulp.parallel(js, scss),
    copyImages,
    copyFonts,
);
