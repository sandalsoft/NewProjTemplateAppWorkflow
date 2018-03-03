import axios from 'axios';
import fs from 'fs';

const gitignoreURL =
  'https://gist.githubusercontent.com/sandalsoft/9ce8d5454f00efa6e42d5b5f5a9f5af8/raw/f2bfca11a1b59fde56773eab7a54d8704e359b68/.gitignore';

export const gitignore = async gitignoreFile => {
  try {
    const gitignoreRes = await axios(gitignoreURL);
    const gitignoreData = gitignoreRes.data;
    fs.writeFileSync(gitignoreFile, gitignoreData);
    return `Successfully wrote ${gitignoreFile}`;
  } catch (err) {
    return Promise.reject(err);
  }
};
