import fs from 'fs-extra';
import path from 'path';

export const createComponent = async ({
  componentName,
  rootDir = process.cwd()
}) => {
  const newComponentDir = path.join(rootDir, 'src', componentName);
  const componentIndexJsFile = path.join(newComponentDir, 'index.js');
  const indexJsStub = '//import stuff here\n\n//export stuff here';

  try {
    await fs.mkdir(newComponentDir);
    await fs.outputFile(componentIndexJsFile, indexJsStub);
  } catch (err) {
    return Promise.reject(err);
  }
};
