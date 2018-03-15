import path from 'path';
import changeCase from 'change-case';

import { writeFile } from '../../util/side-effects';

export const createFunctionTestFile = ({
  functionName,
  testComponentPath,
  fileData
}) => {
  const fileName = `${changeCase.paramCase(functionName)}.test.js`;
  const filePath = path.join(testComponentPath, fileName);

  try {
    return writeFile({ filePath, fileData });
  } catch (err) {
    throw new Error(err);
  }
};
