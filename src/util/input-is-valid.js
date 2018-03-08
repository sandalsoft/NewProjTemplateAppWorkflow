import isAlpha from 'validator/lib/isAlpha';

export const inputIsValid = (input) => {
  return isAlpha(input.charAt(0));
};
