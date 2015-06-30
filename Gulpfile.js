var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
// var streamify = require('gulp-streamify');

// var path = {
//   HTML: './views/index.html',
//   MINIFIED_OUT: 'build.min.js',
//   OUT: 'build.js',
//   DEST: 'public',
//   DEST_BUILD: 'public/build',
//   DEST_SRC: 'public/app',
//   ENTRY_PONT: './client/components/App.js'
// };

// /////////////////////////
// /// Development Tasks ///
// /////////////////////////

// // Copy html task
// gulp.task('copy', function() {
//   gulp.src(path.HTML)
//     .pipe(gulp.dest(path.DEST));
// });

// // Main development task
// gulp.task('watch', function() {
//   gulp.watch(path.HTML, ['copy']);

//   var watcher = watchify(browserify({
//     entries: [path.ENTRY_PONT],
//     transform: [reactify],
//     debug: true,
//     cache: {}, packageCache: {}, fullPaths: true
//   }));

//   return watcher.on('update', function() {
//     watcher.bundle()
//       .pipe(source(path.OUT))
//       .pipe(gulp.dest(path.DEST_SRC))
//       console.log('Updated');
//   })
//     .bundle()
//     .pipe(source(path.OUT))
//     .pipe(gulp.dest(path.DEST_SRC));
// });

// // Dev task
// gulp.task('dev', ['watch']);

// ////////////////////////
// /// Production Tasks ///
// ////////////////////////

// // Build task
// gulp.task('build', function() {
//   browserify({
//     entries: [path.ENTRY_PONT],
//     transform: [reactify]
//   })
//     .bundle()
//     .pipe(source(path.MINIFIED_OUT))
//     .pipe(streamify(uglify(path.MINIFIED_OUT)))
//     .pipe(gulp.dest(path.DEST_BUILD));
// });

// // replaceHTML task
// gulp.task('replaceHTML', function() {
//   gulp.src(path.HTML)
//     .pipe(htmlreplace({
//       'js': 'build/' + path.MINIFIED_OUT
//     }))
//     .pipe(gulp.dest(path.DEST));
// });

// // Production task
// // TODO: fix uglify in build task and add to production tasks
// gulp.task('production', ['replaceHTML']);
