import { writeFile, fileExists } from '../../util/side-effects';

export const createIndexFile = ({ componentIndexFilePath, indexFileData }) => {
  const filePath = componentIndexFilePath;
  const fileData = indexFileData;
  console.log(
    `componentIndexFilePath: ${JSON.stringify(componentIndexFilePath)}`
  );
  console.log(`indexFileData: ${JSON.stringify(indexFileData)}`);
  fileExists(componentIndexFilePath) &&
    (() => {
      throw new Error(`${componentIndexFilePath} already exists.`);
    });

  try {
    return writeFile({ filePath, fileData });
  } catch (err) {
    throw new Error(err);
  }
};
