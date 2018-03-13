import path from 'path';
import fs from 'fs-extra';
import changeCase from 'change-case';

import Config from '../../../../config';

export const createFunctionFile = ({ functionName, componentPath }) => {
  const fileName = changeCase.paramCase(functionName);
  const fileText = Config.cli.functionText(functionName);
  const filePath = path.join(componentPath, `${fileName}.js`);
  console.log(`filePath: ${JSON.stringify(filePath)}`);

  if (!fs.existsSync(componentPath)) {
    throw new Error(`${componentPath} does not exist.`);
  }

  if (fs.existsSync(filePath)) {
    console.log('-------------- ');
    throw new Error(`${filePath} already exists.`);
  }

  try {
    fs.writeFileSync(filePath, fileText);
  } catch (err) {
    return new Error(err);
  }
};
