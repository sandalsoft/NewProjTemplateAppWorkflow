import path from 'path';

import getProjectRootDir from '../../util/get-project-root-dir';
///Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/dummy_proj_for_cli/src/cli/functionName

export const getFunctionTestDir = ({
  componentName,
  testingRootDir = path.join(getProjectRootDir, 'test')
}) => {
  const testDir = path.join(
    testingRootDir, // PROJ_ROOT/test/
    componentName, // cli/
    `dummy_proj_for_${componentName}`, // dummy_proj_for_cli/
    'src', // src/
    componentName // cli
  );

  return testDir;
};
