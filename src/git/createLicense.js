import fs from 'fs';
import { promisify } from 'util';

const licenseText = `Copyright (c) ${new Date().getFullYear()} Eric Nelson \nAll rights reserved`;

export const createLicense = (outputPath = './LICENSE.txt') => {
  try {
    fs.writeFileSync(outputPath, licenseText);
    return '!';
  } catch (err) {
    return new Error(err);
  }
};
