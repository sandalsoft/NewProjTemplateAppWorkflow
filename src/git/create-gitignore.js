import axios from 'axios';
import fs from 'fs';

const gitignoreURL =
  'https://gist.githubusercontent.com/sandalsoft/9ce8d5454f00efa6e42d5b5f5a9f5af8/raw/.gitignore';

export const gitignore = async (projectName) => {
  //TODO: verify gitignoreFile isn't pointing to /etc/passwd. Or hardcode it based on project name.
  //DONE: Change gitignoreFile to projectName and use ${projectName}/.gitignore
  const gitignoreFile = `${projectName}/.gitignore`;

  try {
    const gitignoreRes = await axios(gitignoreURL);
    const gitignoreData = gitignoreRes.data;
    fs.writeFileSync(gitignoreFile, gitignoreData);

    //TODO: Cleanup the return value.  Return path of file, size in bites, status object?
    return `Successfully wrote ${gitignoreFile}`;
  } catch (err) {
    return Promise.reject(err);
  }
};
