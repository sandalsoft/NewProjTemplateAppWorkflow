import { writeFile, fileExists } from '../../util/side-effects';

export const createIndexFile = ({ indexFilePath, indexFileData }) => {
  const filePath = indexFilePath;
  const fileData = indexFileData;

  console.log(`indexFilePath: ${JSON.stringify(indexFilePath)}`);
  console.log(`indexFileData: ${JSON.stringify(indexFileData)}`);

  fileExists(indexFilePath) &&
    (() => {
      throw new Error(`${indexFilePath} already exists.`);
    });

  try {
    //TODO: return a promise (with a value) so this function can be chained with others that return a promise
    return writeFile({ filePath, fileData });
  } catch (err) {
    throw new Error(err);
  }
};
