import path from 'path';

import { createIndexFile } from './create-index-file';
import { getProjectTestingRootDir } from '../../util/get-project-testing-root-dir';
import { removeFile, readFile, fileExists } from '../../util/side-effects';
import Config from '../../../config';

/* Dir structure for testing
  /PROJECT_ROOT/test/COMPONENT_NAME/src/index.js
  */

const functionName = 'createIndexFileTestFunction';
const componentName = 'cli';
const testingRootDir = getProjectTestingRootDir();
const functionTestingRoot = path.join(
  testingRootDir,
  componentName,
  'ProjectRootForTesting',
  'src'
);
const indexFilePath = path.join(functionTestingRoot, 'index.js');
const importLine = Config.cli.indexFileImportModuleLine(functionName);
const exportLine = Config.cli.indexFileExportModuleLine(functionName);
const indexFileData = importLine + '\n' + exportLine;

afterEach(() => {
  try {
    fileExists(indexFilePath) && removeFile(indexFilePath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('index file is created with proper content', async () => {
  expect.assertions(1);
  const expected = true;

  const isIndexisFileCreated = await createIndexFile({
    indexFilePath,
    indexFileData
  });

  const dataFromFile = readFile({ filePath: indexFilePath });

  const actual =
    dataFromFile.includes(indexFileData) &&
    dataFromFile.includes(`export { ${functionName}`) &&
    isIndexisFileCreated;

  expect(actual).toEqual(expected);
});
