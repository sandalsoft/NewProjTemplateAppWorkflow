import path from 'path';

import { fileExists } from '../util/side-effects';
export const canCreateComponent = (newComponentName) => {
  return (
    fileExists('./package.json') &&
    !fileExists(path.join('src', newComponentName))
  );
};
