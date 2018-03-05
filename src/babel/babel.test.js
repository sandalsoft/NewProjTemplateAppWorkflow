import { handleBabelrc } from '.';

test('Downloads .bablerc', async () => {
  expect.assertions(1);
  const result = await handleBabelrc('/dev/null');
  expect(result.status).toBe('success');
});
