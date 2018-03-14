import { writefile } from '../util/side-effects';

const licenseText = `Copyright (c) ${new Date().getFullYear()} Eric Nelson \nAll rights reserved`;

export const createLicense = (outputPath = './LICENSE.txt') => {
  try {
    writefile(outputPath, licenseText);
  } catch (err) {
    return new Error(err);
  }
};
