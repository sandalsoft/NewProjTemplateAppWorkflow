import { log } from './util';
// import { setGithubOrigin, gitInit, gitignore, createGithubRepo } from './git';

const main = async () => {
  try {
    log('lets do this!');
    // const githubUser = 'sandalsoft';
    // const projectName = 'boober';
    // await gitInit();
    // const output = await setGithubOrigin(githubUser, projectName);
    // const output = await gitignore('./.gitignore');
    // const output = await createGithubRepo();
    // log(output);
  } catch (err) {
    log(new Error(err.stack) || new Error(err));
  }
};

main();
