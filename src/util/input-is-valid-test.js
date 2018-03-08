import { inputIsValid } from '.';

test('/etc/passwd is invalue', () => {
  const expected = 'false';
  const actual = inputIsValid('/etc/passwd');
  expect(actual).toEqual(expected);
});
