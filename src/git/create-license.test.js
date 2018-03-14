import { createLicense } from './create-license';

test('Create LICENSE.txt', () => {
  expect(createLicense).not.toThrow();
});
