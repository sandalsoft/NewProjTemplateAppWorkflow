import axios from 'axios';

import { executeCmd, chop } from '../util';

export const createGithubRepo = async () => {
  const githubUserOutput = await executeCmd('(git config github.user)');
  const githubUser = chop(githubUserOutput);

  const githubTokenOutput = await executeCmd('(git config github.token)');
  const githubToken = chop(githubTokenOutput);

  // const dirOutput = await executeCmd('basename `pwd`');
  const dirOutput = 'proj\n';
  const dir = chop(dirOutput);

  const projectName = `${dir}x`;
  const projectDesc = `${projectName} - Could use a little more description`;

  const config = {
    url: 'https://api.github.com/user/repos',
    method: 'post',
    auth: {
      username: githubUser,
      password: githubToken
    },
    data: {
      name: projectName,
      description: projectDesc,
      private: true,
      has_issues: true,
      has_wiki: true,
      has_downloads: false
    }
  };

  const response = await axios.request(config);
  return response.status;
};
