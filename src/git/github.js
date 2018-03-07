import { exec } from '../util';

export const setGithubOrigin = async (username, projectName) =>
  await exec(
    `git remote set-url origin git@github.com:${username}/${projectName}.git`
  );

// THIS DOES NOTHING NOW... handled by separate fuctions, but kept for reference

// export { setGithubOrigin };

// const main = async () => {
//   try {
//     log('lets do this!');
//     const githubUser = 'sandalsoft';
//     const projectName = 'boober';
//     const output = await executeGitSetOrigin(githubUser, projectName);
//     log(output);
//   } catch (err) {
//     log(new Error(err.stack) || new Error(err));
//   }
// };

// main();
