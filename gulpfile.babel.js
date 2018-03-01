import gulp from 'gulp';
import axios from 'axios';

import mkdir from './src/mkdir';

const repoURL =
  'https://raw.githubusercontent.com/sandalsoft/NewProjTemplateAppWorkflow/master/';

const fetchContent = url => axios(url);

const getEslint = async url => await fetchContent(`${url}.eslintrc`);

const writeFile = async (filepath, content) => {};

// gulp.task('default', ['eslint']);
export const eslint = async () => {
  const eslint = await getEslint(`${repoURL}.eslintrc`);
  return eslint.data;
};
// gulp.task('eslint', async function() {
//   try {
//     const eslint = await getEslint(repoURL);
//     console.log(eslint.data);
//   } catch (e) {
//     throw e;
//   }
// });

/*
 * You can still use `gulp.task`
 * for example to set task names that would otherwise be invalid
 */
const build = gulp.series([mkdir, eslint);
gulp.task('default', build);

/*
 * Export a default task
 */
export default build;
