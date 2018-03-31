import { writeFile, fileExists } from '../../util/side-effects';

export const createIndexFile = ({ indexFilePath, indexFileData }) => {
  fileExists(indexFilePath) &&
    (() => {
      throw new Error(`${indexFilePath} already exists.`);
    });

  try {
    console.log(`indexFilePath: ${JSON.stringify(indexFilePath)}`);
    return Promise.resolve(
      writeFile({ filePath: indexFilePath, fileData: indexFileData })
    );
  } catch (err) {
    throw new Error(err);
  }
};
