import path from 'path';
import changeCase from 'change-case';

import {
  removeFile,
  readFile,
  fileExists,
  createDirectory
} from '../../util/side-effects';
import { createFunctionFile } from './create-function-file';
import { getProjectTestingRootDir } from '../../util/get-project-testing-root-dir';
import { getFunctionTestPath } from '../../util/get-funtion-test-path';
import Config from '../../../config';
import { createTemplateExpression } from 'typescript';

const functionName = 'takeDump';
const componentName = 'babel';
// const componentPath = path.join();
const functionTestDir = getFunctionTestPath({
  testingRootPath: undefined,
  componentName,
  functionName
});
console.log(`functionTestDir: ${JSON.stringify(functionTestDir)}`);
const fileName = `${changeCase.paramCase(functionName)}.js`;
const fileData = Config.cli.functionText(functionName);
const filePath = path.join(functionTestDir.path, fileName);

beforeEach(() => {
  try {
    !fileExists(functionTestDir) && createDirectory(functionTestDir);
  } catch (err) {
    return Promise.reject(err);
  }
});
afterEach(() => {
  try {
    removeFile(filePath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('should not throw:', () => {
  expect(function() {
    createFunctionFile({ functionName, functionTestDir, fileData });
  }).not.toThrow();
});

test('file is created with proper text:', () => {
  createFunctionFile({ functionName, functionTestDir, fileData });

  const dataFromFile = readFile({ filePath: filePath });

  const expected = true;
  const actual =
    dataFromFile.includes(fileData) && dataFromFile.includes('export const');

  expect(actual).toEqual(expected);
});
