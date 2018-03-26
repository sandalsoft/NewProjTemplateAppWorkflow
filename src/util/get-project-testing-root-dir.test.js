import { getProjectTestingRootDir } from './get-project-testing-root-dir';

test('finds root dir properly:', async () => {
  const actual = getProjectTestingRootDir(
    '/Users/enelson/Development/NewProjTemplateAppWorkflow/src/cli/component'
  );

  const expected = '/Users/enelson/Development/NewProjTemplateAppWorkflow/test';
  expect(actual).toEqual(expected);
});
