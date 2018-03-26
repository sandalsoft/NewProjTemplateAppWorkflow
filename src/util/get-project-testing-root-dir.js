import path from 'path';

import { getProjectRootDir } from './get-project-root-dir';

export const getProjectTestingRootDir = (dir = process.cwd()) => {
  const projectRootDir = getProjectRootDir({ dir });

  return path.join(projectRootDir, 'test');
};
