import path from 'path';

import { fileExists } from '../../util/side-effects';
import { updateIndexFile, createIndexFile } from '.';

export const addFunctionToIndex = ({ functionName, componentPath }) => {
  const indexFilePath = path.join(componentPath, 'index.js');
  console.log(`indexFilePath: ${JSON.stringify(indexFilePath)}`);
  fileExists(indexFilePath)
    ? updateIndexFile({ functionName, indexFilePath })
    : createIndexFile({ functionName, indexFilePath });
};
