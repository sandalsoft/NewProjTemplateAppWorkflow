import { inputIsValid } from './input-is-valid';

test('/etc/passwd is invalid', () => {
  const expected = false;
  const actual = inputIsValid('/etc/passwd');
  expect(actual).toEqual(expected);
});

test('../whatever is invalid', () => {
  const actual = true;
  const expected = inputIsValid('../whateverXX');
  expect(actual).toEqual(expected);
});
