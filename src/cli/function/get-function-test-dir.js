import path from 'path';

import { getProjectRootDir } from '../../util/get-project-root-dir';
///Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/ProjectRootForTesting/src/cli/functionName

export const getFunctionTestDir = ({
  componentName,
  testingRootDir = path.join(getProjectRootDir({}), 'test')
}) => {
  const testDir = path.join(
    testingRootDir, // PROJ_ROOT/test/
    componentName, // cli/
    `ProjectRootForTesting${componentName}`, // ProjectRootForTesting/
    'src', // src/
    componentName // cli
  );
  return testDir;
};
