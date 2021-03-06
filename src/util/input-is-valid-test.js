import { inputIsValid } from '.';

test('/etc/passwd is invalid', () => {
  const expected = 'false';
  const actual = inputIsValid('/etc/passwd');
  expect(actual).toEqual(expected);
});

test('../whatever is invalid', () => {
  const actual = true;
  const expected = inputIsValid('../whatever');
  expect(actual).toEqual(expected);
});
