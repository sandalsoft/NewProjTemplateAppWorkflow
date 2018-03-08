import fs from 'fs-extra';

const licenseText = `Copyright (c) ${new Date().getFullYear()} Eric Nelson \nAll rights reserved`;

export const createLicense = (outputPath = './LICENSE.txt') => {
  try {
    fs.writeFileSync(`file://${outputPath}`, licenseText);
  } catch (err) {
    return new Error(err);
  }
};
