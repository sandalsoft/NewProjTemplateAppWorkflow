import path from 'path';

import { createIndexFile } from './create-index-file';
import {
  removeFile,
  readFile,
  fileExists,
  createDirectory
} from '../../util/side-effects';

import Config from '../../../config';

const functionName = 'createIndexFileTestFunction';
const componentName = 'cli';
const testFilename = 'index.js';

////////
const directory =
  // '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/ProjectRootForTesting/src/cli';
  Config.testing.ComponentDir(componentName);
const filePath = path.join(directory, testFilename);
////////

// const componentTestSrcPath = path.join(
//   getComponentTestPath({ componentName }),
//   Config.testing.testingProjDirName,
//   'src'
// ); // $PROJECT/test/git/ProjectRootForTesting/src

const testingFilePath = filePath; //path.join(componentTestSrcPath, testFilename); // the right file
const importLine = Config.cli.indexFileImportModuleLine(functionName);
const exportLine = Config.cli.indexFileExportModuleLine(functionName);
const testingFileData = importLine + '\n' + exportLine;

beforeEach(() => {
  try {
    console.log(`creating directory: ${JSON.stringify(directory)}`);
    // !fileExists(componentTestSrcPath) && createDirectory(componentTestSrcPath);
    !fileExists(directory) && createDirectory(directory);
  } catch (err) {
    console.error(err.stack || err);
  }
});

afterEach(() => {
  try {
    // removeFile(getComponentTestPath({ componentName }));
    console.log(`deleting directory: ${directory}`);
    removeFile(directory);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('index file is created with proper content', async () => {
  expect.assertions(1);
  const expected = true;

  const isIndexisFileCreated = await createIndexFile({
    indexFilePath: testingFilePath,
    indexFileData: testingFileData
  });

  const dataFromFile = readFile({ filePath: testingFilePath });

  const actual =
    // dataFromFile.includes(testingFileData) &&
    dataFromFile.includes(`export { ${functionName}`) && isIndexisFileCreated;

  expect(actual).toEqual(expected);
});
