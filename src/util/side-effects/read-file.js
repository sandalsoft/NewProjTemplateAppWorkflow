import fs from 'fs-extra';

export const readFile = ({ filePath, encoding = 'utf8' }) => {
  try {
    const content = fs.readFileSync(filePath, {
      encoding: encoding
    });
    return content;
  } catch (err) {
    throw new Error(err);
  }
};
