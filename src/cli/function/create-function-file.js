import path from 'path';
import changeCase from 'change-case';

import { writeFile, fileExists } from '../../util/side-effects';

export const createFunctionFile = (functionName, componentPath, fileData) => {
  const fileName = `${changeCase.paramCase(functionName)}.js`;
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
    writeFile({ filePath, fileData });
  } catch (err) {
    throw new Error(err);
  }
};
