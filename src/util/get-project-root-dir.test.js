import path from 'path';

import { getProjectRootDir } from './get-project-root-dir';

test('finds root dir properly:', async () => {
  const actual = getProjectRootDir({
    dir:
      '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/dummy_proj_for_generator/src/babel'
  });

  //[MAKE THE MAGIC HAPPEN]
  const expected = '/Users/enelson/Development/NewProjTemplateAppWorkflow';
  expect(actual).toEqual(expected);
});
