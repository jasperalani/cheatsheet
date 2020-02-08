const gulp = require('gulp');
const sass = require('gulp-sass');
const changed = require('gulp-changed');
const minify = require('gulp-minify');

const global_SOURCE = './src/**/*';
const global_DISTRIBUTION = './dist';

const sass_SOURCE = './src/sass/**/*';
const sass_THEME = './src/sass/theme.scss';
const sass_DISTRIBUTION = './dist/css';
gulp.task('copy-sass', function(){
    return gulp.src(sass_THEME)
        .pipe(sass())
        .pipe(gulp.dest(sass_DISTRIBUTION))
});
gulp.task('watch-sass', function(){
    gulp.watch(sass_SOURCE, gulp.series('copy-sass'));
});

/* PHP */
const php_SOURCE = './src/php/**/*';
const php_DISTRIBUTION = './dist/php';
gulp.task('copy-php', function(){
    return gulp.src(php_SOURCE)
        .pipe(gulp.dest(php_DISTRIBUTION));
});
gulp.task('changed-php', function(){
    return gulp.src(php_SOURCE)
        .pipe(changed(php_DISTRIBUTION))
        .pipe(gulp.dest(php_DISTRIBUTION));
});
gulp.task('watch-php', function(){
    gulp.watch(php_SOURCE, gulp.series('changed-php'));
});

/* JavaScript */
const js_SOURCE = './src/js/**/*';
const js_DISTRIBUTION = './dist/js';
gulp.task('copy-js', function(){
    return gulp.src(js_SOURCE)
        .pipe(minify())
        .pipe(gulp.dest(js_DISTRIBUTION));
});
gulp.task('changed-js', function(){
    return gulp.src(js_SOURCE)
        .pipe(changed(js_DISTRIBUTION))
        .pipe(minify())
        .pipe(gulp.dest(js_DISTRIBUTION));
});
gulp.task('watch-js', function(){
    gulp.watch(js_SOURCE, gulp.series('changed-js'));
});

/* All */
const copychanged_SOURCE = [global_SOURCE, '!./src/sass/**'];
gulp.task('copy-all', function(){
    return gulp.src(copychanged_SOURCE)
        .pipe(gulp.dest(global_DISTRIBUTION));
});
gulp.task('changed-all', function(){
    return gulp.src(copychanged_SOURCE)
        .pipe(changed(global_DISTRIBUTION))
        .pipe(gulp.dest(global_DISTRIBUTION));
});
gulp.task('watch-all', function(){
    gulp.watch(global_SOURCE, gulp.series('changed-all'));
});