// eslint-disable-next-line import/no-commonjs
const babel = require('babel-core');
// import babel from 'babel-core';

export const transformCode = ({ functionName, pluginFilePath, code }) => {
  const options = {
    plugins: [
      [
        pluginFilePath,
        {
          functionName: functionName
        }
      ]
    ],
    parserOpts: {
      parser: 'recast'
    },
    generatorOpts: {
      generator: 'recast'
    }
  };

  try {
    const updatedCode = babel.transform(code, options).code;
    return Promise.resolve(updatedCode);
  } catch (err) {
    return Promise.reject(err);
  }
};
