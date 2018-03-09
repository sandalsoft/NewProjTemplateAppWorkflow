import prompts from 'prompts';
import fs from 'fs-extra';
import _ from 'lodash';

export const functionPrompts = (srcDir) => {
  const componentList = fs
    .readdirSync(srcDir)
    .filter((file) => fs.statSync(file).isDirectory())
    .map((component) => ({ title: component, value: component }));

  const questions = [
    {
      type: 'text',
      name: 'name',
      message: '𝓕unction name: '
    },
    {
      type: 'autocomplete',
      name: 'component',
      message: 'Which component is this part of: ',
      choices: [
        { title: 'Cage' },
        { title: 'Clooney', value: 'silver-fox' },
        { title: 'Gyllenhaal' },
        { title: 'Gibson' },
        { title: 'Grant' }
      ]
    }
  ];
};
