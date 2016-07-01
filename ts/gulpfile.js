var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function() {
  gulp.src("less/bootstrap.a2.less")
    .pipe(less())
    .pipe(gulp.dest("less/css"));
});
