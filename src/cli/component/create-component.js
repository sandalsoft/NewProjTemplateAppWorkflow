/**
 *
 * import path from 'path';

import { createDirectory, writefile } from '../util/side-effects';
export const createComponent = async ({
  componentName,
  rootDir = process.cwd()
}) => {
  const newComponentDir = path.join(rootDir, 'src', componentName);
  const componentIndexJsFile = path.join(newComponentDir, 'index.js');
  const indexJsStub = '//import stuff here\n\n//export stuff here';

  try {
    await createDirectory(newComponentDir);
    await writefile(componentIndexJsFile, indexJsStub);
  } catch (err) {
    return Promise.reject(err);
  }
};


 */
