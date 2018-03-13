import path from 'path';
import fs from 'fs-extra';
import changeCase from 'change-case';

import { createFunctionFile } from './create-function-file';
import Config from '../../../../config';

const projectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/dummy_proj_for_cli';

const functionName = 'takeDump';
const componentName = 'babel';
const componentPath = path.join(projectRootDir, 'src', componentName);
const fileName = `${changeCase.paramCase(functionName)}.js`;
const fileText = Config.cli.functionText(functionName);
const filePath = path.join(componentPath, fileName);

afterEach(() => {
  try {
    fs.removeSync(filePath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

describe('create file ', () => {
  test('should not throw:', () => {
    expect(function() {
      createFunctionFile({
        functionName: functionName,
        componentPath: componentPath
      });
    }).not.toThrow();
  });

  test('file is created with proper text:', () => {
    createFunctionFile({
      functionName: functionName,
      componentPath: componentPath,
      fileContent: fileText
    });

    const fileContent = fs.readFileSync(filePath, {
      encoding: 'utf8'
    });

    const expected = true;
    const actual =
      fileContent.includes(fileText) && fileContent.includes('export const');

    expect(actual).toEqual(expected);
  });
});
