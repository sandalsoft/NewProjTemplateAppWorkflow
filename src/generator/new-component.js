import prompts from 'prompts';

import { exec, chop } from '../util';

const executeCmd = async (cmd) => await exec(cmd);

export const newComponent = async () => {
  let questions = [
    {
      type: 'select',
      name: 'componentType',
      message: 'Type of component',
      choices: [
        { title: 'index.js', value: 'index' },
        { title: 'function', value: 'function' },
        { title: 'React component', value: 'reactComponent' }
      ],
      initial: 0
    },
    {
      type: 'text', //(prev) => (prev !== 'project' ? 'text' : null),
      name: 'description',
      message: 'Project description: '
    },
    {
      type: 'text',
      name: 'username',
      message: 'What is your GitHub username: ',
      initial: async () => chop(await executeCmd('(git config github.user)'))
    },

    {
      type: 'text',
      name: 'about',
      message: 'Tell something about yourself',
      initial: 'Why should I?'
    }
  ];

  let response = await prompts(questions);
  return response;
};
