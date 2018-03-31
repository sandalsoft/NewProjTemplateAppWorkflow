import path from 'path';
import { getProjectTestingRootDir } from './get-project-testing-root-dir';

// function sayName({first='Bob',last='Smith'}: {first?: string; last?: string}={}){
export const getFunctionTestPath = ({
  testingRootPath = getProjectTestingRootDir(),
  componentName,
  functionName
}: {
  testingRootPath: string;
  componentName: string;
  functionName: string;
}): string => {
  console.log(`testingRootPath: ${JSON.stringify(testingRootPath)}`);
  return path.join(testingRootPath.path, componentName, functionName);
};
