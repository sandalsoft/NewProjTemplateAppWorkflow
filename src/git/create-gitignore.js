import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';

import { isValidProjectDir, getProjectRootDir } from '../util';

//TODO: move URL to config.js
const gitignoreURL =
  'https://gist.githubusercontent.com/sandalsoft/9ce8d5454f00efa6e42d5b5f5a9f5af8/raw/.gitignore';

export const createGitIgnore = async (projectDir = getProjectRootDir()) => {
  console.log(`projectDir: ${JSON.stringify(projectDir)}`);
  if (!isValidProjectDir(projectDir)) {
    return Promise.reject(
      new Error('Invalid project directory.  Cannot create .gitignore')
    );
  }

  const gitignoreFile = path.join(projectDir, '.gitignore');

  try {
    const gitignoreRes = await axios(gitignoreURL);
    const gitignoreData = gitignoreRes.data;
    fs.writeFileSync(gitignoreFile, gitignoreData);
    return;
  } catch (err) {
    return Promise.reject(err);
  }
};
