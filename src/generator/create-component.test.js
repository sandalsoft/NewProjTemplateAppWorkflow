import fs from 'fs-extra';

import { canCreateComponent, createComponent } from '.';

const componentName = 'mirv';
const projectRootDir =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/dummy_proj_for_generator';
const componentDir = `${projectRootDir}/src/${componentName}`;

beforeAll(async () => {
  console.log(`Creating ${componentName} in project dir ${projectRootDir}`);
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
    console.log('Done');
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('Creates component directory', async () => {
  const actual = true;

  const expected = fs.existsSync(componentDir);
  expect(actual).toEqual(expected);
});

test('index.js exists with stub comments', async () => {
  const expectedIndexStr = '//import stuff here\n\n//export stuff here';
  const actual = true;

  const fileContent = fs.readFileSync(`${componentDir}/index.js`, {
    encoding: 'utf8'
  });
  console.log(fileContent);
  const expected = fileContent === expectedIndexStr;
  expect(actual).toEqual(expected);
});
