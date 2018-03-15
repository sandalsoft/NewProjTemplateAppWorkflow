import path from 'path';

import { fileExists, writeFile } from '../../util/side-effects';

export const createFile = ({ filePath, fileText }) => {
  const componentPath = path.dirname(filePath);

  !fileExists(componentPath) &&
    (() => {
      throw new Error(`${componentPath} does not exist.`);
    });

  fileExists(filePath) &&
    (() => {
      throw new Error(`${filePath} already exists.`);
    });

  try {
    writeFile({ filePath: filePath, fileData: fileText });
    return true;
  } catch (err) {
    throw new Error(err);
  }
};
