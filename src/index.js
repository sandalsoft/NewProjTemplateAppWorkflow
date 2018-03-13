// import path from 'path';
// import { setGithubOrigin, gitInit, gitignore, createGithubRepo } from './git';
// import { functionPrompt } from './cli';
import { log, chop } from './util';
// import Config from '../config';
const main = async () => {
  try {
    log(chop('lets do this!\n'));
    // const p = path.join(process.cwd(), 'src');
    // const response = await functionPrompt(p);
    // log(response);
    // log(Config.cli.functionText('hi'));
  } catch (err) {
    // log(new Error(err.stack) || new Error(err));
    console.log(err);
  }
};

main();
