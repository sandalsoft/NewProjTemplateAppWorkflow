import changeCase from 'change-case';
import path from 'path';

import { addFunctionToIndex } from './add-function-to-index.js';
import { createFunctionFile } from './create-function-file';
import { createFunctionTestDir } from './create-function-test-dir';
import { createFunctionTestFile } from './create-function-test-file';
import { createIndexFile } from './create-index-file.js';
import { fileExists } from '../../util/side-effects';
import { getComponentDir } from '../component/get-component-dir';
import { getFunctionTestDir } from './get-function-test-dir';
import { getProjectRootDir } from '../../util/get-project-root-dir';
import Config from '../../../config';

export const createFunction = async ({ componentName, functionName }) => {
  try {
    const projectRootDir = getProjectRootDir({});
    const componentPath = getComponentDir({ componentName, projectRootDir });
    const componentIndexFilePath = path.join(componentPath, 'index.js');

    const fileData = Config.cli.functionText(functionName);
    const indexFileData = Config.cli.indexFileData(functionName);
    const testComponentPath = getFunctionTestDir({ componentName });

    const functionTestFileName = path.join(
      testComponentPath,
      `${changeCase.paramCase(functionName)}.js`
    );
    const functionTestFileData = Config.cli.testData({
      functionName,
      functionTestFileName
    });
    // Do Stuff
    const isCreateFileSuccessful = createFunctionFile({
      functionName,
      componentPath,
      fileData
    });

    const isCreateTestDirSuccessful = await createFunctionTestDir({
      componentName
    });
    const isCreateTestFileSuccessful = createFunctionTestFile({
      functionName,
      testComponentPath,
      functionTestFileData
    });

    fileExists(componentIndexFilePath)
      ? addFunctionToIndex({ functionName, componentPath })
      : createIndexFile({
          componentIndexFilePath,
          indexFileData
        });
  } catch (err) {
    return Promise.reject(err);
  }
};
