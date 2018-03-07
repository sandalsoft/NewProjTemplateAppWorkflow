import vorpal from 'vorpal';

/*
  1. prompt for info
    - project name
  2. check if directory exists
  2a. if so, check for files
  2b. if so, bail

  3. mkdir src/compnent
  4. touch index.js
  5. ask if want to create new function
*/
export const newComponent = () => {
  return vorpal()
    .delimiter('🍆 ')
    .show();
};
