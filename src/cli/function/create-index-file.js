import { writeFile, fileExists } from '../../util/side-effects';

export const createIndexFile = ({ indexFilePath, indexFileData }) => {
  const filePath = indexFilePath;
  const fileData = indexFileData;

  // console.log(`indexFilePath: ${JSON.stringify(indexFilePath)}`);
  // console.log(`indexFileData: ${JSON.stringify(indexFileData)}`);

  fileExists(indexFilePath) &&
    (() => {
      throw new Error(`${indexFilePath} already exists.`);
    });

  try {
    return Promise.resolve(writeFile({ filePath, fileData }));
  } catch (err) {
    throw new Error(err);
  }
};
