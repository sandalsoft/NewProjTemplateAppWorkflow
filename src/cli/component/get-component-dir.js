import path from 'path';

export const getComponentDir = ({ componentName, projectRootDir }) => {
  console.log(`componentName: ${JSON.stringify(componentName)}`);
  console.log(`projectRootDir: ${JSON.stringify(projectRootDir)}`);
  return path.join(projectRootDir, 'src', componentName);
};
