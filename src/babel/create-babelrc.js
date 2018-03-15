import path from 'path';
import { fetchData, writeFile } from '../util/side-effects';
import { rejectifMissing } from '../util';

const babelrcURL =
  'https://gist.githubusercontent.com/sandalsoft/1621509c1dd9792c4c9118f29de56db5/raw/.babelrc';

export const createBabelrc = async (projectName = rejectifMissing()) => {
  const babelrcFile = path.join(projectName, '.babelrc');
  try {
    const babelrcData = await fetchData(babelrcURL);
    writeFile(babelrcFile, JSON.stringify(babelrcData));
    return { status: 'success' };
  } catch (err) {
    return Promise.reject(err);
  }
};
