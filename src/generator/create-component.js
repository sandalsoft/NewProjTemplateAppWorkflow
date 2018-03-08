import fs from 'fs-extra';
//  3. mkdir src/compnent
//   4. touch index.js
//   5. ask if want to create new function

export const createComponent = async (componentName) => {
  const newComponentDir = `./src/${componentName}`;
  const componentIndexJsFile = `${newComponentDir}/index.js`;
  const indexJsStub = '//import shit here\n\n//export shit here';
  console.log(`Creating ${newComponentDir}`);

  try {
    await fs.mkdir(newComponentDir);
    await fs.outputFile(componentIndexJsFile, indexJsStub);
  } catch (err) {
    return Promise.reject(err);
  }
};
