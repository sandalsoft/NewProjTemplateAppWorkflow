import nodeCmd from 'node-cmd';
import { promisify } from 'util';

const exec = promisify(nodeCmd.get, { multiArgs: true, context: nodeCmd });
const executeCmd = async (cmd) => await exec(cmd);

export const initGitRepo = async () => await executeCmd('git init');
