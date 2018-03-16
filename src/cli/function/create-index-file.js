import path from 'path';
import changeCase from 'change-case';

import { writeFile, fileExists } from '../../util/side-effects';

const createIndexFile = ({ functionName, indexFilePath, indexFileData }) => {
  fileExists(indexFilePath) &&
    (() => {
      throw new Error(`${indexFilePath} already exists.`);
    });

  try {
    writeFile({ indexFilePath, indexFileData });
  } catch (err) {
    throw new Error(err);
  }
};
