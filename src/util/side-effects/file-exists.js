import fs from 'fs-extra';

export const fileExists = (filePath) => {
  return fs.existsSync(filePath);
};
