import { promisify } from 'util';
import nodeCmd from 'node-cmd';

export const exec = async (cmd) =>
  await promisify(nodeCmd.get, { multiArgs: true, context: nodeCmd })(cmd);
