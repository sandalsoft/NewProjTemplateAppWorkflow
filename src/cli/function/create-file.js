import path from 'path';
import fs from 'fs-extra';

export const createFile = ({ filePath, fileText }) => {
  const componentPath = path.dirname(filePath);

  if (!fs.existsSync(componentPath)) {
    throw new Error(`${componentPath} does not exist.`);
  }

  if (fs.existsSync(filePath)) {
    throw new Error(`${filePath} already exists.`);
  }

  try {
    fs.writeFileSync(filePath, fileText);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};
