import isAlpha from 'validator/lib/isAlpha';

export const inputIsValid = (input: string): boolean => {
  return isAlpha(input.charAt(0));
};
