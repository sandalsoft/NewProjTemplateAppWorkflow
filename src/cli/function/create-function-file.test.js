import path from 'path';
import changeCase from 'change-case';

import { removeFile, readFile } from '../../util/side-effects';
import { createFunctionFile } from './create-function-file';
import Config from '../../../config';

const projectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/ProjectRootForTesting';

const functionName = 'takeDump';
const componentName = 'babel';
const componentPath = path.join(projectRootDir, 'src', componentName);
const fileName = `${changeCase.paramCase(functionName)}.js`;
const fileData = Config.cli.functionText(functionName);
const filePath = path.join(componentPath, fileName);

afterEach(() => {
  try {
    removeFile(filePath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('should not throw:', () => {
  expect(function() {
    createFunctionFile({ functionName, componentPath, fileData });
  }).not.toThrow();
});

test('file is created with proper text:', () => {
  createFunctionFile({ functionName, componentPath, fileData });

  const dataFromFile = readFile({ filePath: filePath });

  const expected = true;
  const actual =
    dataFromFile.includes(fileData) && dataFromFile.includes('export const');

  expect(actual).toEqual(expected);
});
