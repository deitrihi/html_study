var gulp = require('gulp');
//var sass = require('gulp-sass');
//var sassVariables = require('gulp-sass-variables');
//var argv = require('yargs').argv;
//var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');
//var template = require('gulp-template');
var template_html = require('gulp-template-html');


// webpack 샘플, 
gulp.task('webpack', function() { 
    return gulp.src('./js_exam/js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./'))
});

// html template 샘플
gulp.task('html_template', function() {
    return gulp.src('./html_exam/src/*.html')
        .pipe(template_html('./html_menu.html'))
        .pipe(gulp.dest('./dist/html_exam/'));
});

// html 기타 파일 복사
gulp.task('html_exam', ['html_template'],function() {
    return gulp.src('./html_exam/*.html')
        .pipe(gulp.dest('./dist/html_exam/'));
});

// js template 샘플
gulp.task('js_template', function() {
    return gulp.src('./js_exam/src/*.html')
        .pipe(template_html('./js_menu.html'))
        .pipe(gulp.dest('./dist/js_exam/'));
});
gulp.task('js_js', () => {
    gulp.src(['./js_exam/js/**'])
    .pipe(gulp.dest('./dist/js_exam/js/'))
});
// js 기타 파일 복사
gulp.task('js_exam', ['js_template', 'js_js'],function() {
    return gulp.src('./js_exam/*.html')
        .pipe(gulp.dest('./dist/js_exam/'));
});

// vue template 샘플
gulp.task('vue_template', function() {
    return gulp.src('./vue_exam/src/*.html')
        .pipe(template_html('./vue_menu.html'))
        .pipe(gulp.dest('./dist/vue_exam/'));
});
gulp.task('vue_js', () => {
    gulp.src(['./vue_exam/js/**'])
    .pipe(gulp.dest('./dist/vue_exam/js/'))
});
// vue 기타 파일 복사
gulp.task('vue_exam', ['vue_template', 'vue_js'],function() {
    return gulp.src('./vue_exam/*.html')
        .pipe(gulp.dest('./dist/vue_exam/'));
});

gulp.task('exam_main', ['exam_main_js'],() => {
    gulp.src(['./index.html', './layout.css'])
    .pipe(gulp.dest('./dist/'))
});
gulp.task('exam_main_js', () => {
    gulp.src(['./js/*.js'])
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('default', ['exam_main', 'html_exam', 'js_exam', 'vue_exam']);