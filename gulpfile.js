const gulp = require('gulp'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    minify = require('gulp-minify');

const pre_path = './app/',
    global_SOURCE = pre_path + 'src/**/*',
    global_DISTRIBUTION = pre_path + 'dist',
    copychanged_SOURCE = [
        global_SOURCE,
        '!' + pre_path + 'src/sass/**',
        '!' + pre_path + 'src/js/**'
    ];

/* All */
gulp.task('watch-all', function () {
    gulp.watch(sass_SOURCE, gulp.series('copy-sass'));
    gulp.watch(js_SOURCE, gulp.series('copy-js'));
    gulp.watch(php_SOURCE, gulp.series('changed-php'));
    gulp.watch(php_index_SOURCE, gulp.series('copy-php-index'));
    gulp.watch(res_SOURCE, gulp.series('copy-res'));
});

gulp.task('copy-all', function () {
    return gulp.src(copychanged_SOURCE)
        .pipe(gulp.dest(global_DISTRIBUTION));
});
gulp.task('changed-all', function () {
    return gulp.src(copychanged_SOURCE)
        .pipe(changed(global_DISTRIBUTION))
        .pipe(gulp.dest(global_DISTRIBUTION));
});

// gulp.task('watch-all', function(){
//     gulp.watch(global_SOURCE, gulp.series('changed-all'));
// });

/* Sass */
const sass_SOURCE = pre_path + 'src/sass/**/*';
const sass_THEME = pre_path + 'src/sass/theme.scss';
const sass_DISTRIBUTION = pre_path + 'dist/css';
gulp.task('copy-sass', function () {
    return gulp.src(sass_THEME)
        .pipe(sass())
        .pipe(gulp.dest(sass_DISTRIBUTION))
});
gulp.task('watch-sass', function () {
    gulp.watch(sass_SOURCE, gulp.series('copy-sass'));
});

/* JavaScript */
const js_SOURCE = pre_path + 'src/js/**/*';
const js_DISTRIBUTION = pre_path + 'dist/js';
gulp.task('copy-js', function () {
    return gulp.src(js_SOURCE)
        .pipe(minify())
        .pipe(gulp.dest(js_DISTRIBUTION));
});
gulp.task('watch-js', function () {
    gulp.watch(js_SOURCE, gulp.series('copy-js'));
});

/* PHP */
const php_SOURCE = pre_path + 'src/php/**/*';
const php_DISTRIBUTION = pre_path + 'dist/php';
gulp.task('copy-php', function () {
    return gulp.src(php_SOURCE)
        .pipe(gulp.dest(php_DISTRIBUTION));
});
gulp.task('changed-php', function () {
    return gulp.src(php_SOURCE)
        .pipe(changed(php_DISTRIBUTION))
        .pipe(gulp.dest(php_DISTRIBUTION));
});
gulp.task('watch-php', function () {
    gulp.watch(php_SOURCE, gulp.series('changed-php'));
});
const php_index_SOURCE = pre_path + 'src/index.php';
gulp.task('copy-php-index', function () {
    return gulp.src(php_index_SOURCE)
        .pipe(gulp.dest(global_DISTRIBUTION));
});
gulp.task('watch-php-index', function () {
    gulp.watch(php_index_SOURCE, gulp.series('copy-php-index'));
});

const res_SOURCE = pre_path + 'src/res/**/*',
    res_DISTRIBUTION = pre_path + 'dist/res';
gulp.task('copy-res', function () {
    return gulp.src(res_SOURCE)
        .pipe(gulp.dest(res_DISTRIBUTION));
});
gulp.task('watch-res', function () {
    gulp.watch(res_SOURCE, gulp.series('copy-res'));
});
