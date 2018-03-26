import { writeFile, fileExists } from '../../util/side-effects';

export const createIndexFile = ({ indexFilePath, indexFileData }) => {
  fileExists(indexFilePath) &&
    (() => {
      throw new Error(`${indexFilePath} already exists.`);
    });

  try {
    return Promise.resolve(
      writeFile({ filePath: indexFilePath, fileData: indexFileData })
    );
  } catch (err) {
    throw new Error(err);
  }
};
