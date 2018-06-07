const gulp = require('gulp');
const babel = require('gulp-babel');
const runSequence = require('run-sequence');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');

//transpiling for idb promised library
gulp.task('idbController', function() {
  gulp.src('dev/js/idbController.js')
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(browserify())
    // .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('dbhelper', function() {
  gulp.src('dev/js/dbhelper.js')
    .pipe(babel({
      presets: ["env"]
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('main', function (cb) {
  gulp.src('dev/js/main.js')
    // .pipe(minify({
    //   ext:{
    //     src: '-debug.js',
    //     min: '.js'
    //   }
    // }))
    .pipe(gulp.dest('./js'));
});

gulp.task('jsBundle', (cb) => {
  runSequence('idbController', 'dbhelper', 'main', cb);
})

gulp.task('watch:jsBundle', function () {
  gulp.watch('./dev/js/**/*.js', ['jsBundle']);
});

gulp.task('default', function(callback) {
  runSequence('idbController', 'dbhelper', 'main', callback);
});
