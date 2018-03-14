import fs from 'fs-extra';

export const readFile = ({ filePath, encoding = 'utf8' }) => {
  try {
    fs.readFileSync(filePath, {
      encoding: encoding
    });
  } catch (err) {
    throw new Error(err);
  }
};
