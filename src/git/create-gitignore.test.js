import path from 'path';
import fs from 'fs-extra';

import { createGitIgnore } from './create-gitignore';
import { log, isValidProjectDir } from '../util';

const projectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/dummy_proj_for_generator';
const gitignoreFile = path.join(projectRootDir, '.gitignore');

beforeAll(() => {
  log('Setting up tests');
});

afterAll(() => {
  console.log('Tearing down tests');
  try {
    const projDir = path.dirname(gitignoreFile);
    if (isValidProjectDir(projDir)) {
      fs.removeSync(gitignoreFile);
    } else {
      console.log('No .gitignore file to tear down');
      console.log(`gitignoreFile: ${gitignoreFile}`);
    }
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('.gitignore is downloaded and written properly', async () => {
  expect.assertions(1);
  const actual = true;

  await createGitIgnore(projectRootDir);

  const fileContent = fs.readFileSync(gitignoreFile, {
    encoding: 'utf8'
  });

  const expected = fileContent.includes('IF YOU CAN READ THIS, YOU\'RE DEAD');

  expect(actual).toEqual(expected);
});
