import fs from 'fs-extra';
import path from 'path';

import { exec } from '../util';

export const initGitRepo = async (repoPath = path.basename(process.cwd())) => {
  const gitPath = path.join(repoPath, '.git');

  try {
    if (fs.statSync(gitPath).isDirectory()) {
      return Promise.reject(new Error('Git repo already exists'));
    } else {
      await exec('git init');
    }
  } catch (err) {
    return Promise.reject(err);
  }
};
