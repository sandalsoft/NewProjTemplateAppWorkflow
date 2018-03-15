import path from 'path';

import { isValidProjectDir, getProjectRootDir } from '../util';
import { writeFile, fetchData } from '../util/side-effects';

//TODO: move URL to config.js
const gitignoreURL =
  'https://gist.githubusercontent.com/sandalsoft/9ce8d5454f00efa6e42d5b5f5a9f5af8/raw/.gitignore';

export const createGitIgnore = async (projectDir = getProjectRootDir()) => {
  !isValidProjectDir(projectDir) &&
    (() => {
      return Promise.reject(
        new Error('Invalid project directory.  Cannot create .gitignore')
      );
    });

  const gitignoreFile = path.join(projectDir, '.gitignore');

  try {
    const gitignoreData = await fetchData(gitignoreURL);
    return writeFile({ filePath: gitignoreFile, fileData: gitignoreData });
  } catch (err) {
    return Promise.reject(err);
  }
};
