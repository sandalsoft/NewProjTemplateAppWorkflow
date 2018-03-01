import gulp from 'gulp';
import axios from 'axios';
import Directory from 'directory-helpers';

const repoURL =
  'https://raw.githubusercontent.com/sandalsoft/NewProjTemplateAppWorkflow/master/';

const fetchContent = url => axios(url);

const getEslint = async url => await fetchContent(`${url}.eslintrc`);

const writeFile = async (filepath, content) => {};
// create a default task
gulp.task('default', ['eslint']);

gulp.task('eslint', async function() {
  try {
    const eslint = await getEslint(repoURL);
    console.log(eslint.data);
  } catch (e) {
    throw e;
  }
});

// gulp.task('eslint', function() {
//   console.log('tich');
// });
