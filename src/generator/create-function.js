import fs from 'fs-extra';
import path from 'path';

import listDirectories from '../util';

// * Ask which compoennt function is part of (Autocomplete list for existing coponents) - Or default to recently created component above
// * create funtion-name.js file
// * import { log, rejectIfMissing, etc } in function-name.js
// * stub 'const functionName = () => { \n\n\n }'
// * export functionName at bottom
// * create function-name.test.js file
// * add import/export to index.js

const createFile = (name, fileContent) => {
  try {
    fs.writeFileSync(`file://${name.js}`, fileContent);
  } catch (err) {
    return new Error(err);
  }
};

export const createFunction = async (name) => {
  createfile(name, 'e');
};
