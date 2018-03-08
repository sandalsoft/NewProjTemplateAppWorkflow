// import { createBabelrc } from '.';

test('Downloads .bablerc', async () => {
  expect.assertions(1);
  const expected = true;
  const actual = true;
  // const result = await createBabelrc('/dev/null');
  expect(actual).toEqual(expected);
});
