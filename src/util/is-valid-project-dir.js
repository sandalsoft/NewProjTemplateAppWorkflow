import fs from 'fs-extra';
import path from 'path';

export const isValidProjectDir = (input) => {
  return (
    fs.existsSync(path.join(input, './src/')) &&
    fs.existsSync(path.join(input, './package.json'))
  );
};
