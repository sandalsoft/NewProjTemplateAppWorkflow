import path from 'path';
import fs from 'fs-extra';
import changeCase from 'change-case';

import { createFunctionTestFile } from './create-function-test-file';
import Config from '../../../config';

const dummyProjectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/dummy_proj_for_cli';

const functionName = 'takeDump';
const componentName = 'babel';
const testComponentPath = path.join(dummyProjectRootDir, 'src', componentName);
const fileName = `${changeCase.paramCase(functionName)}.test.js`;
const fileText = Config.cli.testText({
  functionName: functionName,
  testFileName: fileName
});
const filePath = path.join(testComponentPath, fileName);

afterEach(() => {
  try {
    fs.removeSync(filePath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('should not throw:', () => {
  expect(function() {
    createFunctionTestFile({
      functionName: functionName,
      testComponentPath: testComponentPath,
      fileContent: fileText
    });
  }).not.toThrow();
});

test('file is created with proper text:', () => {
  createFunctionTestFile({
    functionName: functionName,
    testComponentPath: testComponentPath,
    fileContent: fileText
  });

  const fileContent = fs.readFileSync(filePath, {
    encoding: 'utf8'
  });

  const expected = true;
  const actual = fileContent.includes(fileText); //&& fileContent.includes('beforeEach');

  expect(actual).toEqual(expected);
});
