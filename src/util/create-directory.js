import fs from 'fs-extra';

export const createFile = async (dirPath) => {
  if (fs.existsSync(dirPath)) {
    throw new Error(`${dirPath} already exists.`);
  }

  try {
    await fs.mkdirp(dirPath);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};
