import { exec } from '../util';

export const initGitRepo = async () => await exec('git init');
