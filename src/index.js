// import path from 'path';
// import { setGithubOrigin, gitInit, gitignore, createGithubRepo } from './git';
// import { functionPrompt } from './cli';

import { transformCode } from './util/side-effects/transform';
import { readFile } from './util/side-effects/read-file';
import { log, chop } from './util';
// import Config from '../config';

const main = () => {
  try {
    log(chop('lets do this!\n'));

    const code = readFile({
      filePath:
        '/Users/enelson/Development/NewProjTemplateAppWorkflow/src/util/side-effects/index.js'
    });

    const functionName = 'makeMeRich';

    const output = transformCode({ code, functionName });
    console.log(output);
  } catch (err) {
    console.log(err);
  }
};

main();
