var gulp = require('gulp');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

var config = {
	dist: 'dist/',
	imgIn: 'images/**/*.{jpg,jpeg,png,gif}',
	jsIn: [
    'vendors/handlebars.js',
    'js/libs/index.js', //Responsible for handling libraries
    'js/libs/*.js',
    'js/templates/index.js', //Responsible for handling templates
    'js/load-templates.js', //Load datasource then run templates with it.
    'js/templates/*.js' //Templates functions.
    
  ],
  templatesIn: 'templates/**/*.html',
	cssIn: 'css/**/*.css',
	cssOut: 'dist/css/',
	cssOutName: 'style.min.css',
	jsOut: 'dist/js/',
	jsOutName: 'script.min.js',
  templatesOutName: 'template.html',
  templatesOut: 'dist/templates/',
	imgOut: 'dist/images/'
};

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', ['css'], function() {
  browserSync({
    server: './',
    open:false
  });

  gulp.watch(['index.html', config.jsIn,config.templatesIn], ['reload']);
  gulp.watch(config.jsIn, ['js']);
  gulp.watch(config.templatesIn, ['template']);
  gulp.watch(config.cssIn, ['css']);
});

gulp.task('css', function() {
  return gulp.src(config.cssIn)
  	.pipe(sourcemaps.init())
  	.pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(concat(config.cssOutName))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.cssOut));
});

gulp.task('js', function() {
  return gulp.src(config.jsIn)
  	.pipe(sourcemaps.init())
    .pipe(concat(config.jsOutName))
    .pipe(uglify().on('error',console.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.jsOut));
});

gulp.task('template', function() {
  return gulp.src(config.templatesIn)
    .pipe(sourcemaps.init())
    .pipe(concat(config.templatesOutName))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.templatesOut));
});



gulp.task('img', function() {
  return gulp.src(config.imgIn)
    .pipe(imagemin())
    .pipe(gulp.dest(config.imgOut));
});