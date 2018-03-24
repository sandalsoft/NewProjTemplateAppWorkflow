import { transformCode } from './transform';

import changeCase from 'change-case';
// const plugin = ' ./src/util/babel-transform-plugin';
const plugin = require('./babel-transform-plugin');
const functionName = 'makeMeRich';
const expected = `import { ${functionName} } from "./${changeCase.paramCase(
  functionName
)}";`;

test('transformCode works', () => {
  const code = `
    import { setGithubOrigin } from './set-github-origin';
    import { createGitignore } from './create-gitignore';
    export { setGithubOrigin, createGitignore};
    `;

  const actual = transformCode({ functionName, plugin, code });
  expect(true).toEqual(actual.includes(expected));
});

// test('transformFile throws error:', async () => {
//   // expect.assertions(1);
//   const filename = './src/util/index.js';
//   // const actual = await transformFile({ functionName, plugin, filename });

//   function tryTransform() {
//     transformFile({ functionName, plugin, filename });
//   }

//   expect(tryTransform).toThrowError(/NOT/);
// });
