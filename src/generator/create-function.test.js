import path from 'path';
import fs from 'fs-extra';

import { log, isValidProjectDir } from '../util';

test('Function file is created:', () => {
  const actual = true;

  //[MAKE THE MAGIC HAPPEN]
  const expected = false;
  expect(actual).toEqual(expected);
});
