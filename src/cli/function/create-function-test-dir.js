import fs from 'fs-extra';
import path from 'path';

import { getFunctionTestDir } from './get-function-test-dir';
import getProjectRootDir from '../../util/get-project-root-dir';
///Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/dummy_proj_for_cli/src/cli/functionName

export const createFunctionTestDir = async ({
  componentName,
  testingRootDir = path.join(getProjectRootDir, 'test')
}) => {
  const testDir = getFunctionTestDir({
    componentName: componentName,
    testingRootDir: testingRootDir
  });

  try {
    fs.mkdirpSync(testDir);
    console.log('------------ should retrun true soon');
    return true;
  } catch (err) {
    return Promise.reject(err);
  }
};
