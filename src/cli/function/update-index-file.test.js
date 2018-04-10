import path from 'path';
import changeCase from 'change-case';

import { updateIndexFile } from './update-index-file';
import { createIndexFile } from './create-index-file';
import {
  removeFile,
  readFile,
  fileExists,
  createDirectory
} from '../../util/side-effects';

import Config from '../../../config';

const functionName = 'updateIndexFileTestFunction';
const componentName = 'cli';

// const componentTestRootPath = getComponentTestPath({ componentName }); // /cli
// const componentTestSrcPath = path.join(componentTestRootPath, 'src'); // /src
// // const testFileName = `${changeCase.paramCase(functionName)}.test.js`;
// const testFileName = 'update-index-file-test-function.test.js';
// const functionTestFilePath = path.join(componentTestSrcPath, testFileName); // the right file
// const dirWhereFunctionTestLives = path.dirname(functionTestFilePath);

// const indexFilePath = path.join(dirWhereFunctionTestLives, 'index.js');

const importLine = Config.cli.indexFileImportModuleLine('existingFunctionName');
const exportLine = Config.cli.indexFileExportModuleLine('existingFunctionName');
const indexFileData = importLine + '\n' + exportLine;
const pluginFilePath = path.join(
  '/Users/enelson/Development/NewProjTemplateAppWorkflow',
  // getProjectRootDir(),
  'src/util/babel-transform-plugin.js'
);

const filename = 'index.js';

const directory =
  // '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/ProjectRootForTesting/src';
  Config.testing.ComponentDir(componentName);
const filePath = path.join(directory, filename);

beforeEach(() => {
  try {
    console.log(`creating directory: ${JSON.stringify(directory)}`);
    !fileExists(directory) && createDirectory(directory);
  } catch (err) {
    console.error(err.stack || err);
  }
});

// afterEach(() => {
//   try {
//     console.log(`deleting directory: ${directory}`);
//     removeFile(directory);
//   } catch (err) {
//     console.error(err.stack || err);
//   }
// });

test('index file is updated with proper content', async () => {
  expect.assertions(1);
  const expected = true;

  const isIndexisFileupdated = await updateIndexFile({
    functionName,
    filePath,
    pluginFilePath
  });

  console.log(`filePath: ${JSON.stringify(filePath)}`);
  const dataFromFile = readFile({ filePath: filePath });

  const actual =
    dataFromFile.includes(
      'import { existingFunctionName } from \'./existing-function-name\';'
    ) &&
    dataFromFile.includes('export { ') &&
    dataFromFile.includes(`${functionName}`) &&
    isIndexisFileupdated;

  expect(actual).toEqual(expected);
});
