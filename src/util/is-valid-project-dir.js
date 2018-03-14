import path from 'path';

import { fileExists } from '../util/side-effects';

export const isValidProjectDir = (input) => {
  return (
    fileExists(path.join(input, './src/')) &&
    fileExists(path.join(input, './package.json'))
  );
};
