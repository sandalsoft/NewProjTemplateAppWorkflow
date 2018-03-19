import fs from 'fs-extra';
import path from 'path';

import { fileExists } from '.';

/**
 *
 * @param {Object}
 */
export const writeFile = ({ filePath, fileData, encoding = 'utf8' }) => {
  const parentDirectory = path.dirname(filePath);
  !fileExists(parentDirectory) &&
    (() => {
      throw new Error(`${parentDirectory} does not exist.`);
    });

  fileExists(filePath) &&
    (() => {
      throw new Error(`${filePath} already exists.`);
    });
  try {
    fs.writeFileSync(filePath, fileData, { encoding });
    return true;
  } catch (err) {
    throw new Error(err);
  }
};
