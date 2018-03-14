import fs from 'fs-extra';
import path from 'path';

export const directoryList = (filePath) => {
  return fs
    .readdirSync(filePath)
    .filter((fileName) =>
      fs.statSync(path.join(filePath, fileName)).isDirectory()
    );
};
