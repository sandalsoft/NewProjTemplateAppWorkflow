import path from 'path';

import { getProjectRootDir } from './get-project-root-dir';

test('finds root dir properly:', async () => {
  const actual = getProjectRootDir({
    dir:
      '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/ProjectRootForTesting/src/babel'
  });

  const expected = '/Users/enelson/Development/NewProjTemplateAppWorkflow';
  expect(actual).toEqual(expected);
});
