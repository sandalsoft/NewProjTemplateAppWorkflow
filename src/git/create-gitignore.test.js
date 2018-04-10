import path from 'path';

import {
  removeFile,
  readFile,
  fileExists,
  createDirectory
} from '../util/side-effects';
import { createGitIgnore } from './create-gitignore';
import { getComponentTestPath } from '../util';

import Config from '../../config';

const componentName = 'git';
const filename = '.gitignore';

//  $PROJECT/test/git/ProjectRootForTesting/.gitignore

const componentTestRootPath = path.join(
  getComponentTestPath({
    componentName
  })
); // $PROJECT/test/git

const projectTestPath = path.join(
  componentTestRootPath,
  Config.testing.testingProjDirName
);

const fileTestPath = path.join(projectTestPath, filename); //  $PROJECT/test/git/ProjectRootForTesting/.gitignore

beforeEach(() => {
  try {
    !fileExists(projectTestPath) && createDirectory(projectTestPath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

afterEach(() => {
  try {
    removeFile(componentTestRootPath);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('.gitignore is downloaded and written properly', async () => {
  expect.assertions(1);
  const actual = true;

  const isSuccessful = await createGitIgnore(projectTestPath);
  const fileContent = readFile({ filePath: fileTestPath });
  const expected =
    fileContent.includes('IF YOU CAN READ THIS, YOU\'RE DEAD') && isSuccessful;

  expect(actual).toEqual(expected);
});
