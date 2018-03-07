import prompts from 'prompts';

import { exec, chop } from '../util';

const main = async () => {
  let questions = [
    {
      type: 'text',
      name: 'description',
      message: 'Project description: '
    },
    {
      type: 'text',
      name: 'username',
      message: 'What is your GitHub username: ',
      initial: async () => chop(await exec('(git config github.user)'))
    },

    {
      type: 'text',
      name: 'about',
      message: 'Tell something about yourself',
      initial: 'Why should I?'
    }
  ];

  let response = await prompts(questions);
  console.log(`response: ${JSON.stringify(response)}`);
  return response;
};

main();
