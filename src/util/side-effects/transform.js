// import { babel } from 'babel-core';
const babel = require('babel-core');
const promisify = require('util').promisify;

export const transformCode = ({ functionName, plugin, code }) => {
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
  return babel.transform(code, options).code;
};

export const transformFile = async ({ functionName, plugin, filename }) => {
  throw new Error('NOT IMPLEMENTED - use transFormCode() instead');
  /**
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

  */
};
