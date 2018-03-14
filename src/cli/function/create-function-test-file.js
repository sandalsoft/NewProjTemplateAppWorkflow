import path from 'path';
import changeCase from 'change-case';

import { createFile } from './create-file';

export const createFunctionTestFile = ({
  functionName,
  testComponentPath,
  fileContent
}) => {
  const fileName = `${changeCase.paramCase(functionName)}.test.js`;
  // console.log(`testComponentPath: ${JSON.stringify(testComponentPath)}`);
  const filePath = path.join(testComponentPath, fileName);
  const fileText = fileContent;

  console.log(`filePath: ${JSON.stringify(filePath)}`);

  try {
    createFile(filePath, fileText);
  } catch (err) {
    throw new Error(err);
  }
};
