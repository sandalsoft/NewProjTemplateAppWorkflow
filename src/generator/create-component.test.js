import fs from 'fs-extra';
import path from 'path';
import { log } from '../util';

import { canCreateComponent, createComponent } from '.';

const componentName = 'mirv';
const projectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/dummy_proj_for_generator';
const componentDir = path.join(projectRootDir, 'src', componentName);

beforeAll(async () => {
  log('Setting up tests.');
  if (canCreateComponent(componentName)) {
    try {
      await createComponent({
        componentName: componentName,
        rootDir: projectRootDir
      });
      console.log('Done');
    } catch (err) {
      console.error(err.stack || err);
    }
  } else {
    console.log('Cant create Directory');
  }
});

afterAll(() => {
  console.log(`Removing ${componentDir}`);
  try {
    fs.removeSync(componentDir);
  } catch (err) {
    console.error(err.stack || err);
  }
});

describe('Creating component...', () => {
  test('directory is created', () => {
    expect.assertions(1);
    const actual = true;

    const expected = fs.existsSync(componentDir);
    expect(actual).toEqual(expected);
  });

  test('index.js exists with stub comments', () => {
    expect.assertions(1);
    const expectedIndexJsData = '//import stuff here\n\n//export stuff here';
    const actual = true;

    const fileContent = fs.readFileSync(path.join(componentDir, 'index.js'), {
      encoding: 'utf8'
    });
    const expected = fileContent === expectedIndexJsData;
    expect(actual).toEqual(expected);
  });
});
