import fs from 'fs-extra';

export const readFile = ({ filePath, encoding = 'utf8' }) => {
  console.log(`filePath: ${JSON.stringify(filePath)}`);
  try {
    const content = fs.readFileSync(filePath, {
      encoding: encoding
    });
    console.log(`content: ${JSON.stringify(content)}`);
    return content;
  } catch (err) {
    throw new Error(err);
  }
};
