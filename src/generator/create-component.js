import fs from 'fs-extra';
//  3. mkdir src/compnent
//   4. touch index.js
//   5. ask if want to create new function

export const createComponent = async ({
  componentName,
  rootDir = process.cwd()
}) => {
  const newComponentDir = 'fingerMeCuban'; //`${rootDir}/src/${componentName}`;
  const componentIndexJsFile = `${rootDir}/${newComponentDir}/index.js`;
  const indexJsStub = '//import shit here\n\n//export shit here';
  console.log(`Creating ${newComponentDir}`);

  try {
    /**
     * Why does mkdir seem to do mkdir the passed in dir relative to the cwd?
     * ie. mkdir(/tmp/foo) creates  ~/Development/NewProjTemplateAppWorkflow/tmp/foo ?
     */
    await fs.mkdir(newComponentDir);
    await fs.outputFile(componentIndexJsFile, indexJsStub);
  } catch (err) {
    return Promise.reject(err);
  }
};
