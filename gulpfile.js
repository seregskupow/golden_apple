var gulp = require('gulp'),
sass = require('gulp-sass'), 
uglify  = require('gulp-uglify'),
minifyCSS = require('gulp-clean-css'),
rename = require('gulp-rename'),
changed =require('gulp-changed'),
autoprefixer = require('gulp-autoprefixer');


var SCSS_SRC = './app/scss/**/*.scss';
var SCSS_DEST = './app/css'

gulp.task('sass', function() { 
        return gulp.src('./app/scss/**/*.sсss') 
            .pipe(sass().on('error', sass.logError)) 
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
            .pipe(minifyCSS())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./app/css')); 
           
    });
    gulp.task('watch', function() {
        gulp.watch('./app/scss/**/*.scss', gulp.parallel('sass')); 
       
    });

    gulp.task('default', gulp.parallel( 'sass','watch'));