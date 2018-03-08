export const doesStringContainList = (list, str) => {
  list.map((substr) => {
    //FIXME: indoxOf is busted
    if (str.indexOf(substr) > -1) {
      return false;
    }
  });
  return true;
};
