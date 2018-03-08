import axios from 'axios';
import fs from 'fs';
import { rejectifMissing } from '../util';

const babelrcURL =
  'https://gist.githubusercontent.com/sandalsoft/1621509c1dd9792c4c9118f29de56db5/raw/.babelrc';

export const createBabelrc = async (projectName = rejectifMissing()) => {
  const babelrcFile = `${projectName}/.babelrc`;
  try {
    const response = await axios(babelrcURL);
    const babelrcData = response.data;
    fs.writeFileSync(babelrcFile, JSON.stringify(babelrcData));
    return { status: 'success' };
  } catch (err) {
    return Promise.reject(err);
  }
};
