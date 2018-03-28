import path from 'path';

import { updateIndexFile } from './update-index-file';
import { createIndexFile } from './create-index-file';
import { getProjectRootDir } from '../../util/get-project-root-dir';
import { getProjectTestingRootDir } from '../../util/get-project-testing-root-dir';
import { removeFile, readFile, fileExists } from '../../util/side-effects';
import Config from '../../../config';

/* Dir structure for testing
  /PROJECT_ROOT/test/COMPONENT_NAME/src/index.js
  */

const functionName = 'updateIndexFileTestFunction';
const componentName = 'cli';
const testingRootDir = getProjectTestingRootDir();
const functionTestingRoot = path.join(
  testingRootDir,
  componentName,
  'ProjectRootForTesting',
  'src'
);
const indexFilePath = path.join(functionTestingRoot, 'index.js');

const importLine = Config.cli.indexFileImportModuleLine('existingFunctionName');
const exportLine = Config.cli.indexFileExportModuleLine('existingFunctionName');
const indexFileData = importLine + '\n' + exportLine;
const pluginFilePath = path.join(
  getProjectRootDir(),
  '/src/util/babel-transform-plugin.js'
);

beforeEach(async () => {
  try {
    !fileExists(indexFilePath) &&
      (await createIndexFile({
        indexFilePath,
        indexFileData
      }));
  } catch (err) {
    return Promise.reject(err);
  }
});

afterEach(() => {
  try {
    fileExists(indexFilePath) && removeFile(indexFilePath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('index file is updated with proper content', async () => {
  expect.assertions(1);
  const expected = true;

  const isIndexisFileupdated = await updateIndexFile({
    functionName,
    indexFilePath,
    pluginFilePath
  });

  const dataFromFile = readFile({ filePath: indexFilePath });

  const actual =
    dataFromFile.includes(
      'import { existingFunctionName } from \'./existing-function-name\';'
    ) &&
    dataFromFile.includes('export { ') &&
    dataFromFile.includes(`${functionName}`) &&
    isIndexisFileupdated;

  expect(actual).toEqual(expected);
});
