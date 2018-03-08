import isAlphanumeric from 'validator/lib/isAlphanumeric';

export const inputIsValid = (input) => {
  isAlphanumeric(input);
};
