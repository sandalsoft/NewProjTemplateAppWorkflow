import nodeCmd from 'node-cmd';
import { promisify } from 'util';
import { log } from './util';

const exec = promisify(nodeCmd.get, { multiArgs: true, context: nodeCmd });

const executeCmd = async cmd => await exec(cmd);

const executeGitSetOrigin = async (username, projectName) =>
  await executeCmd(
    `echo "git remote set-url origin git@github.com:${username}/${projectName}.git"`
  );

const main = async () => {
  try {
    log('lets do this!');
    const githubUser = 'sandalsoft';
    const projectName = 'boober';
    const output = await executeGitSetOrigin(githubUser, projectName);
    log(output);
  } catch (err) {
    log(new Error(err.stack) || new Error(err));
  }
};

main();
