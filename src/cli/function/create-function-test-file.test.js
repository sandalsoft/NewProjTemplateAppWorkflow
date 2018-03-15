import path from 'path';
import changeCase from 'change-case';

import { removeFile, readFile } from '../../util/side-effects';
import { createFunctionTestFile } from './create-function-test-file';
import Config from '../../../config';

const dummyProjectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/dummy_proj_for_cli';

const functionName = 'takeDump';
const componentName = 'babel';
const testComponentPath = path.join(dummyProjectRootDir, 'src', componentName);
const testFileName = `${changeCase.paramCase(functionName)}.test.js`;
const fileData = Config.cli.testText({
  functionName: functionName,
  testFileName: testFileName
});

const filePath = path.join(testComponentPath, testFileName);

afterEach(() => {
  try {
    removeFile(filePath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('should not throw:', () => {
  expect(function() {
    createFunctionTestFile({
      functionName,
      testComponentPath,
      fileData
    });
  }).not.toThrow();
});

test('file is created with proper text:', () => {
  const isSuccessful = createFunctionTestFile({
    functionName,
    testComponentPath,
    fileData
  });

  const actualFileData = readFile({ filePath });
  const expected = true;
  const actual = actualFileData.includes(fileData); //&& fileData.includes('beforeEach');

  expect(actual).toEqual(expected);
});
