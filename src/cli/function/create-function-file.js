import path from 'path';
import changeCase from 'change-case';

import Config from '../../../config';
import { createFile } from './create-file';

export const createFunctionFile = ({ functionName, componentPath }) => {
  const fileName = changeCase.paramCase(functionName);
  const filePath = path.join(componentPath, `${fileName}.js`);
  const fileText = Config.cli.functionText(functionName);

  console.log(`filePath: ${JSON.stringify(filePath)}`);
  try {
    createFile({ filePath: filePath, fileText: fileText });
  } catch (err) {
    throw new Error(err);
  }
};
