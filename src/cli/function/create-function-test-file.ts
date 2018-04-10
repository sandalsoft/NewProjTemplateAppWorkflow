import path from 'path';
import changeCase from 'change-case';

import { writeFile } from '../../util/side-effects';

export const createFunctionTestFile = ({
  directory,
  functionName,
  fileData
}) => {
  console.log(`XX directory: ${JSON.stringify(directory)}`);
  const fileName = `${changeCase.paramCase(functionName)}.test.js`;
  const filePath = path.join(directory, fileName);

  console.log(`filePath: ${JSON.stringify(filePath)}`);
  try {
    return writeFile({ filePath, fileData });
  } catch (err) {
    throw new Error(err);
  }
};
