import path from 'path';
import changeCase from 'change-case';

import { writeFile, fileExists } from '../../util/side-effects';

export const createFunctionFile = (functionName, componentPath, fileData) => {
  console.log(`componentPath: ${JSON.stringify(componentPath)}`);
  const fileName = `${changeCase.paramCase(functionName)}.js`;
  console.log(`fileName: ${JSON.stringify(fileName)}`);
  const filePath = path.join(componentPath, fileName);

  !fileExists(componentPath) &&
    (() => {
      throw new Error(`${componentPath} does not exist.`);
    });

  fileExists(filePath) &&
    (() => {
      throw new Error(`${filePath} already exists.`);
    });

  try {
    console.log(`filePath: ${JSON.stringify(filePath)}`);
    console.log(`fileData: ${JSON.stringify(fileData)}`);
    writeFile({ filePath, fileData });
  } catch (err) {
    throw new Error(err);
  }
};
