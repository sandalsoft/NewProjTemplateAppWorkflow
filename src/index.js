// import { setGithubOrigin, gitInit, gitignore, createGithubRepo } from './git';
// import { newComponent } from './generator';
import { log, chop, exec } from './util';

const main = async () => {
  try {
    log(chop('lets do this!\n'));
    // const githubUser = 'sandalsoft';
    // const projectName = 'boober';
    // await gitInit();
    // const output = await setGithubOrigin(githubUser, projectName);
    // const output = await gitignore('./.gitignore');
    // const output = await createGithubRepo();
    // log(output);
    const r = await exec('date');
    log(r);
    // const res = await newComponent();
    // log(res);
  } catch (err) {
    log(new Error(err.stack) || new Error(err));
  }
};

main();
