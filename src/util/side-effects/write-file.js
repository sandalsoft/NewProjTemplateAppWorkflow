import fs from 'fs-extra';

/**
 *
 * @param {Object}
 */
export const writeFile = ({ filePath, fileData, encoding = 'utf8' }) => {
  try {
    fs.writeFileSync(filePath, fileData, encoding);
  } catch (err) {
    throw new Error(err);
  }
};
