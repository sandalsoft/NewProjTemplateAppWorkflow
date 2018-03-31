import path from 'path';
import { getProjectTestingRootDir } from './get-project-testing-root-dir';

// import Config from '../../config';

const ProjectRootForTesting = 'ProjectRootForTesting';

// function sayName({first='Bob',last='Smith'}: {first?: string; last?: string}={}){
export const getComponentTestPath = ({
  testingRootPath = getProjectTestingRootDir(),
  componentName
}: {
  testingRootPath: string;
  componentName: string;
}): string => {
  console.log(`testingRootPath: ${JSON.stringify(testingRootPath)}`);

  // /Users/enelson/Development/NewProjTemplateAppWorkflow/test/COMPONENT_NAME/

  return path.join(testingRootPath, componentName, ProjectRootForTesting);
};
