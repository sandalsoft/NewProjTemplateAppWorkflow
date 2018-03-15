import path from 'path';

import { isValidProjectDir, getProjectRootDir } from '../util';
import { writeFile, fetchData } from '../util/side-effects';
import Config from '../../config';

const gitignoreURL = Config.git.gitignoreURL;

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
