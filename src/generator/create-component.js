import IsThere from 'is-there';

export const createComponent = (name) => {
  console.log('> %s %s', name, IsThere(name) ? 'exists' : 'doesn\'t exist');
};
