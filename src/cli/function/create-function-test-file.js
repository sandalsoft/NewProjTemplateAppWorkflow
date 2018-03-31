import path from 'path';
import changeCase from 'change-case';

import { writeFile } from '../../util/side-effects';

export const createFunctionTestFile = ({
  functionName,
  testComponentPath,
  fileData
}) => {
  console.log(`testComponentPath: ${JSON.stringify(testComponentPath)}`);
  const fileName = `${changeCase.paramCase(functionName)}.test.js`;
  const filePath = path.join(testComponentPath, fileName);

  console.log(`filePath: ${JSON.stringify(filePath)}`);
  try {
    return writeFile({ filePath, fileData });
  } catch (err) {
    throw new Error(err);
  }
};
