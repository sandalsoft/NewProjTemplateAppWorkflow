import fs from 'fs';

const licenseText = `Copyright (c) ${new Date().getFullYear()} Eric Nelson \nAll rights reserved`;

export const createLicense = (outputPath = './LICENSE.txt') => {
  try {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    fs.writeFileSync(`file://${outputPath}`, licenseText);
  } catch (err) {
    return new Error(err);
  }
};
