import { isValidProjectDir } from './is-valid-project-dir';

test('/etc is invalid:', () => {
  const actual = isValidProjectDir('/etc');

  const expected = false;
  expect(actual).toEqual(expected);
});

test('/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/dummy_proj_for_generator is valid:', () => {
  const actual = isValidProjectDir(
    '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/generator/dummy_proj_for_generator'
  );

  const expected = true;
  expect(actual).toEqual(expected);
});
