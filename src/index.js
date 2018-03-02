import Directory from 'directory-helpers';
import nodeCmd from 'node-cmd';
import { promisify } from 'util';

const cmd = promisify(nodeCmd.get, { multiArgs: true, context: nodeCmd });

const main = async () => {
  try {
    const output = await cmd('git log | more');
    console.log(output);
  } catch (err) {
    console.log(`err: ${JSON.stringify(err)}`);
  }
};

main();
