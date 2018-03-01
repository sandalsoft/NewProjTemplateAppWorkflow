const gulp = require('gulp');
const gutil = require('gulp-util');

async function getEslint() {
  const eslint = await axios('https://api.github.com/users/wesbos');
}
// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!');
});
