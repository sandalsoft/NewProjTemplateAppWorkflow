// import path from 'path';
// import { setGithubOrigin, gitInit, gitignore, createGithubRepo } from './git';

import { createFunction } from './cli/function';
import { createComponent } from './cli/function';
import { functionPrompt } from './cli/function';

// import Config from '../config';

const main = async () => {
  try {
    const response = await functionPrompt({});
    console.log(`response: ${JSON.stringify(response)}`);
    const { componentName, functionName, newComponentName } = response;
    newComponentName
      ? createComponent(componentName)
      : createFunction({ componentName, functionName });
  } catch (err) {
    console.log(err);
  }
};

main();
