var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer');
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    reactify   = require('reactify');
    webserver  = require('gulp-webserver'),
    open       = require('gulp-open'),
    port       = process.env.port || 3031;

// browserify the code with sourcemaps
gulp.task('browserify', function() {
  browserify({
    entries: './client/js/main.js',
    transform: [reactify],
    debug: true,
  })
  .bundle()
  .on("error", function (err) {
     console.log(err.toString());
     this.emit("end");
   })
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/js/'));
});


// live reload webserver
gulp.task('webserver', function() {
  gulp.src('./')
  .pipe(webserver({
    port: port,
    livereload: true,
    open: 'http://localhost:' + port + '/index.html'
  }));
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'webserver']);

