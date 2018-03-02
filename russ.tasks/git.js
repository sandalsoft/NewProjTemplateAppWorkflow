const GitHub = require('github-api');
// const simpleGit = require('simple-git')('./output');

module.exports = self = {
  name: 'git',
  doc: 'Init git repo, github project, and .gitignore',
  pre: '',
  post: '',
  deps: ['github-api'],

  func: async (GitHub, russ) => {
    console.log(`Git init for ${russ.config.pluginOpts.git.githubRepoName}`);

    // var gh = new GitHub({
    //   token: russ.config.pluginOpts.git.githubToken
    // });

    // var me = gh.getUser();
    // try {
    //   const githubResponse = await me.createRepo(
    //     russ.config.pluginOpts.git.repoDetails
    //   );
    //   console.log(`githubResponse: ${githubResponse.status}`);
    // } catch (error) {
    //   console.log(`error: ${error}`);
    //   russ.reject();
    // }

    require('simple-git')('./output')
      // .init()
      // .addRemote('origin', russ.config.pluginOpts.git.githubRepoURL)
      .push(['-u', 'origin', 'master'], () =>
        console.log('Success creating git')
      );

    russ.resolve();
  }
};
