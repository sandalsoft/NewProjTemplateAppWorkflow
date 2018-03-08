import fs from 'fs-extra';

export const createComponent = async ({
  componentName,
  rootDir = process.cwd()
}) => {
  const newComponentDir = `${rootDir}/src/${componentName}`;
  const componentIndexJsFile = `${newComponentDir}/index.js`;
  const indexJsStub = '//import stuff here\n\n//export stuff here';

  try {
    await fs.mkdir(newComponentDir);
    await fs.outputFile(componentIndexJsFile, indexJsStub);
  } catch (err) {
    return Promise.reject(err);
  }
};
