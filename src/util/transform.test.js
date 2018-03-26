import changeCase from 'change-case';
import path from 'path';

import { getProjectRootDir } from '../util/get-project-root-dir';
import { transformCode } from './transform';

const functionName = 'transformTestFunction';
const pluginFilePath = path.join(
  getProjectRootDir({}),
  'src/util/babel-transform-plugin.js'
);

test('transformCode works', async () => {
  const expected = true;
  const correctImportCode = `import { ${functionName} } from "./${changeCase.paramCase(
    functionName
  )}";`;

  const existingIndexCode = `
    import { setGithubOrigin } from './set-github-origin';
    import { createGitignore } from './create-gitignore';
    export { setGithubOrigin, createGitignore};
    `;

  const transformedCode = await transformCode({
    functionName,
    pluginFilePath,
    existingIndexCode
  });

  const actual = transformedCode.includes(correctImportCode);
  expect(expected).toEqual(actual);
});
