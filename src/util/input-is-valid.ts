import { isAlpha } from 'validator';

export const inputIsValid = (input: string): boolean => {
  return isAlpha(input.charAt(0));
};
