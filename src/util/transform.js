// eslint-disable-next-line import/no-commonjs
const babel = require('babel-core');
// import babel from 'babel-core';

export const transformCode = ({ functionName, plugin, code }) => {
  console.log(`plugin: ${JSON.stringify(plugin)}`);
  const options = {
    plugins: [
      [
        plugin,
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
    console.log(`updatedCode: ${JSON.stringify(updatedCode)}`);
    return updatedCode;
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
export const transformFile = async ({ functionName, plugin, filename }) => {
  throw new Error('NOT IMPLEMENTED - use transFormCode() instead');

  const options = {
    plugins: [
      [
        plugin,
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

  // const transFile = promisify(babel.transformFile);
  // const output = transFile(filename, options, plugin).code;
  // console.log(`output: ${JSON.stringify(output)}`);
  // return await output;

  console.log(`filename: ${JSON.stringify(filename)}`);
  babel.transformFile(filename, options, (err, result) => {
    err && console.log(`err: ${JSON.stringify(err)}`);
    console.log(`result: ${JSON.stringify(result)}`);
  });
};
  */
