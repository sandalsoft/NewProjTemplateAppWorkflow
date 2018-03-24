import path from 'path';

import { getFunctionTestDir } from './get-function-test-dir';

import { createDirectory } from '../../util/side-effects';
import { getProjectRootDir } from '../../util/get-project-root-dir';
///Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/dummy_proj_for_cli/src/cli/functionName

export const createFunctionTestDir = async ({
  componentName,
  testingRootDir = path.join(getProjectRootDir({}), 'test')
}) => {
  const testDir = getFunctionTestDir({
    componentName,
    testingRootDir
  });

  try {
    return await createDirectory(testDir);
  } catch (err) {
    return Promise.reject(err);
  }
};
