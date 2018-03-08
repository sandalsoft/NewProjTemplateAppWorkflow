import { canCreateComponent } from '.';

/* checks
  should be in root of project (./package.json exists)
  component should not exist (./src/${name} does not exist)
*/

const existingComponentName = 'babel';
const newComponentName = 'avocadoToast';

test('babel/ exists, returns false', () => {
  const expected = false;
  const actual = canCreateComponent(existingComponentName);
  expect(actual).toEqual(expected);
});

test('package.json is not in project dir, returns false', () => {
  const expected = false;
  const actual = canCreateComponent(existingComponentName);
  expect(actual).toEqual(expected);
});

test('passes conditions, returns true', () => {
  const expected = true;
  const actual = canCreateComponent(newComponentName);
  expect(actual).toEqual(expected);
});
