import { exec } from '../util';

export const setGithubOrigin = async (username, projectName) =>
  await exec(
    `git remote set-url origin git@github.com:${username}/${projectName}.git`
  );
