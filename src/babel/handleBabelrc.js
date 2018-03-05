import axios from 'axios';
import fs from 'fs';

const babelrcURL =
  'https://gist.githubusercontent.com/sandalsoft/1621509c1dd9792c4c9118f29de56db5/raw/f25b80b6f36c3f63bb48de37b3b6efc9ab6241e8/.babelrc';

export const handleBabelrc = async (outputPath = './babelrc.txt') => {
  try {
    const response = await axios(babelrcURL);
    const babelrcData = response.data;
    fs.writeFileSync(outputPath, JSON.stringify(babelrcData));
    return { status: 'success' };
  } catch (err) {
    return Promise.reject(err);
  }
};
