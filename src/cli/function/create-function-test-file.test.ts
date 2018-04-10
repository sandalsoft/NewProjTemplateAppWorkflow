import path from 'path';
import changeCase from 'change-case';

import {
  removeFile,
  readFile,
  createDirectory,
  fileExists
} from '../../util/side-effects';

import { createFunctionTestFile } from './create-function-test-file';
import Config from '../../../config';

console.log(`Config: ${JSON.stringify(Config)}`);
const functionName = 'createFunctionTestFile';
const componentName = 'cli';
const filename = `${changeCase.paramCase(functionName)}.test.ts`;

const directory =
  // '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/ProjectRootForTesting/src';
  Config.testing.ComponentDir(componentName);
const filePath = path.join(directory, filename);

const fileData = Config.cli.testData({
  functionName,
  testFileName: filename
});

beforeEach(() => {
  try {
    console.log(`creating directory: ${JSON.stringify(directory)}`);
    !fileExists(directory) && createDirectory(directory);
  } catch (err) {
    console.error(err.stack || err);
  }
});

afterEach(() => {
  try {
    console.log(`deleting directory: ${directory}`);
    removeFile(directory);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('file is created with proper text:', () => {
  const isSuccessful = createFunctionTestFile({
    directory,
    functionName,
    fileData
  });

  const actualFileData = readFile({ filePath });
  const expected = true;
  const actual = actualFileData.includes(fileData) && isSuccessful; //&& fileData.includes('beforeEach');

  expect(actual).toEqual(expected);
});
