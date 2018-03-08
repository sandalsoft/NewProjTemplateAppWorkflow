import fs from 'fs-extra';

import { createComponent } from '.';

const componentName = 'mirv';
const projectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/dummy_proj_for_generator';
const componentDir = `${projectRootDir}/src/${componentName}`;
beforeEach(() => {
  createComponent({ componentName: componentName, rootDir: projectRootDir });
});

afterEach(() => {
  try {
    fs.removeSync(componentDir);
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('Creates component directory', async () => {
  const actual = true;

  const expected = fs.existsSync(componentDir);
  expect(actual).toEqual(expected);
});
