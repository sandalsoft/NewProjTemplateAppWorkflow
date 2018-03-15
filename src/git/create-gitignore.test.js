import path from 'path';

import { removeFile, readFile } from '../util/side-effects';
import { createGitIgnore } from './create-gitignore';
import { log, isValidProjectDir } from '../util';

const projectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/dummy_proj_for_generator';
const gitignoreFile = path.join(projectRootDir, '.gitignore');

beforeAll(() => {
  log('Setting up tests');
});

afterAll(() => {
  try {
    const projDir = path.dirname(gitignoreFile);

    if (isValidProjectDir(projDir)) {
      removeFile(gitignoreFile);
    } else {
      console.log(`No .gitignore file to tear down: ${gitignoreFile}`);
    }
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('.gitignore is downloaded and written properly', async () => {
  expect.assertions(1);
  const actual = true;

  const isSuccessful = await createGitIgnore(projectRootDir);
  const fileContent = readFile({ filePath: gitignoreFile });
  const expected = fileContent.includes('IF YOU CAN READ THIS, YOU\'RE DEAD');

  expect(actual).toEqual(expected);
});
