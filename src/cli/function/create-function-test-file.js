import path from 'path';
import changeCase from 'change-case';

import { createFile } from './create-file';

export const createFunctionTestFile = ({
  functionName,
  testComponentPath,
  fileContent
}) => {
  const fileName = changeCase.paramCase(functionName);
  console.log(`testComponentPath: ${JSON.stringify(testComponentPath)}`);
  const filePath = path.join(testComponentPath, `${fileName}.test.js`);
  const fileText = fileContent;

  try {
    createFile({ filePath: filePath, fileText: fileText });
  } catch (err) {
    throw new Error(err);
  }
};
