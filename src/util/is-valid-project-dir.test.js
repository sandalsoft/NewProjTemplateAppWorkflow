import { isValidProjectDir } from './is-valid-project-dir';

test('/etc is invalid:', () => {
  const actual = isValidProjectDir('/etc');

  const expected = false;
  expect(actual).toEqual(expected);
});

test('directory is valid project dir', () => {
  const actual = isValidProjectDir(
    '/Users/enelson/Development/NewProjTemplateAppWorkflow/'
  );

  const expected = true;
  expect(actual).toEqual(expected);
});
