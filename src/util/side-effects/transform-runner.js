// import { babel } from 'babel-core';
import babel from 'babel-core';
import plugin from './plugin.js';
import readFile from './read-file';

const transformFile = (filename) => {
  console.log(`filename: ${JSON.stringify(filename)}`);
  const functionName = 'poopOnMeFace';
  const opts = {
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

  const code = readFile({ filename });
  return babel.transform(code, opts).code;
};

const output = transformFile(
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/src/util/side-effects/index.js'
);

console.log(output);
