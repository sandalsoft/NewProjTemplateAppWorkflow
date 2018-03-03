import nodeCmd from 'node-cmd';
import { promisify } from 'util';

const exec = promisify(nodeCmd.get, { multiArgs: true, context: nodeCmd });
const executeCmd = async cmd => await exec(cmd);

export const setGithubOrigin = async (username, projectName) =>
  await executeCmd(
    `git remote set-url origin git@github.com:${username}/${projectName}.git`
  );
