import path from 'path';
import changeCase from 'change-case';

import {
  removeFile,
  readFile,
  createDirectory,
  fileExists
} from '../../util/side-effects';
import { createFunctionTestFile } from './create-function-test-file';
import { getComponentTestPath } from '../../util';

import Config from '../../../config';

/*
  PROJECT_TEST_ROOT   /Users/enelson/Development/NewProjTemplateAppWorkflow/test
  COMPONENT   /cli
              /ProjectRootForTesting
              /src
  FUNCTION    /create-functiontest-file.js

*/

const functionName = 'createFunctionTestFile';
const componentName = 'cli';

const componentTestRootPath = getComponentTestPath({ componentName }); // /cli
const componentTestSrcPath = path.join(componentTestRootPath, 'src'); // /src
const dirWhereFunctionTestLives = path.dirname(functionTestFilePath);
const testFileName = `${changeCase.paramCase(functionName)}.test.js`;
const functionTestFilePath = path.join(componentTestSrcPath, testFileName); // the right file

const fileData = Config.cli.testData({
  functionName: functionName,
  testFileName: testFileName
});

beforeEach(() => {
  !fileExists(dirWhereFunctionTestLives) &&
    createDirectory(dirWhereFunctionTestLives);
});

afterEach(() => {
  try {
    removeFile(functionTestFilePath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('should not throw:', () => {
  expect(function() {
    createFunctionTestFile({
      functionName,
      componentTestRootPath,
      fileData
    });
  }).not.toThrow();
});

test('file is created with proper text:', () => {
  const isSuccessful = createFunctionTestFile({
    functionName,
    componentTestRootPath,
    fileData
  });

  const actualFileData = readFile({ filePath: functionTestFilePath });
  const expected = true;
  const actual = actualFileData.includes(fileData); //&& fileData.includes('beforeEach');

  expect(actual).toEqual(expected);
});
