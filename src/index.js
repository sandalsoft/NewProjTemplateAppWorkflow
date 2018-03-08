// import { setGithubOrigin, gitInit, gitignore, createGithubRepo } from './git';
import { gen } from './generator';
import { log, chop } from './util';

const main = async () => {
  try {
    log(chop('lets do this!\n'));
    gen(process.argv);
  } catch (err) {
    // log(new Error(err.stack) || new Error(err));
    console.log(err);
  }
};

main();
