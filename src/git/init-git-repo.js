import path from 'path';

import { exec } from '../util';
import { isDirectory } from '../util/side-effects';

export const initGitRepo = async (repoPath = path.basename(process.cwd())) => {
  const gitPath = path.join(repoPath, '.git');

  try {
    isDirectory(gitPath)
      ? () => {
          return Promise.reject(new Error('Git repo already exists'));
        }
      : await exec('git init');
  } catch (err) {
    return Promise.reject(err);
  }
};
