import fs from 'fs-extra';
import path from 'path';

import { getProjectRootDir } from '../../util/get-project-root-dir';
import { createFunctionTestDir } from './create-function-test-dir';
import { getFunctionTestDir } from './get-function-test-dir';

const testingRootDir = path.join(getProjectRootDir(), 'test');
const componentName = 'test_cli';

beforeEach(() => {
  true;
});

afterEach(() => {
  try {
    fs.removeSync(
      getFunctionTestDir({
        componentName: componentName,
        testingRootDir: testingRootDir
      })
    );
  } catch (err) {
    console.error(err.stack || err);
  }
});

test('test directory is created without error', async () => {
  expect.assertions(1);

  const actual = await createFunctionTestDir({
    componentName: componentName,
    testingRootDir: testingRootDir
  });

  console.log(`actual: ${JSON.stringify(actual)}`);
  const expected = true;
  expect(actual).toEqual(expected);
});
