import { createLicense } from '.';

test('Create LICENSE.txt', () => {
  expect(createLicense()).not.toThrow;
});
