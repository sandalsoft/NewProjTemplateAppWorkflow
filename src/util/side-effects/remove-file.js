import fs from 'fs-extra';

export const removeFile = (filePath) => {
  try {
    fs.removeSync(filePath);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};
