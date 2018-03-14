import fs from 'fs-extra';

export const isDirectory = (filePath) => {
  return fs.statSync(filePath).isDirectory();
};
