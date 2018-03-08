import { createComponent } from '.';

test('Creates component', async () => {
  const expected = false;
  const actual = true;

  createComponent();
  expect(actual).toEqual(expected);
});
