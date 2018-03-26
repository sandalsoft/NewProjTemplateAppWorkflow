// import path from 'path';
// import changeCase from 'change-case';
import { transformCode } from '../../util/transform';
import { readFile, writeFile } from '../../util/side-effects';

// const pluginFilePath = '../../util/babel-transform-plugin ';

export const updateIndexFile = async ({
  functionName,
  indexFilePath,
  pluginFilePath
}) => {
  const filePath = indexFilePath;
  const indexFileData = readFile({ filePath });

  indexFileData.includes(functionName) &&
    (() => {
      throw new Error(`${functionName}() function already exists in index`);
    });

  try {
    const code = readFile({ filePath });

    const fileData = await transformCode({
      functionName,
      pluginFilePath,
      code
    });

    return Promise.resolve(writeFile({ filePath, fileData }));
  } catch (err) {
    return Promise.reject(err);
  }
};
