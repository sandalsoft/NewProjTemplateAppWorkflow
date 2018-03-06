import { createBabelrc } from '.';

test('Downloads .bablerc', async () => {
  expect.assertions(1);
  const result = await createBabelrc('/dev/null');
  expect(result.status).toBe('success');
});
