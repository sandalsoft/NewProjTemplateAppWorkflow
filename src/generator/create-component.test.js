import path from 'path';

import { log } from '../util';
import { removeFile, readFile, fileExists } from '../util/side-effects';
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
    removeFile(componentDir);
  } catch (err) {
    console.error(err.stack || err);
  }
});

describe('Creating component...', () => {
  test('directory is created', () => {
    expect.assertions(1);
    const actual = true;

    const expected = fileExists(componentDir);
    expect(actual).toEqual(expected);
  });

  test('index.js exists with stub comments', () => {
    expect.assertions(1);
    const expectedIndexJsData = '//import stuff here\n\n//export stuff here';
    const actual = true;

    const fileContent = readFile(path.join(componentDir, 'index.js'));
    const expected = fileContent === expectedIndexJsData;
    expect(actual).toEqual(expected);
  });
});
