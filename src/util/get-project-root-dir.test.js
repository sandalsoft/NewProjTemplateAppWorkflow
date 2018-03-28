import { getProjectRootDir } from './get-project-root-dir';

test('finds root dir properly:', async () => {
  const actual = getProjectRootDir();

  const expected = '/Users/enelson/Development/NewProjTemplateAppWorkflow';
  expect(actual).toEqual(expected);
});
