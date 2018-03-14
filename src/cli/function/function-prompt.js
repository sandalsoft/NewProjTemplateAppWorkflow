import prompts from 'prompts';
import path from 'path';

import { directoryList, isDirectory } from '../../util/side-effects';
export const functionPrompt = async ({
  srcDir = process.cwd(),
  answers = undefined
}) => {
  // If answers are supplied for testing, inject them into prompts
  answers && prompts.inject(answers);

  const componentList = directoryList(srcDir)
    // filter out non-directories
    .filter((file) => directoryList(path.join(srcDir, file)))
    // return each directory as an object that prompts can understand
    .map((directory) => ({ title: directory, value: directory }));
  const questions = [
    {
      type: 'text',
      name: 'name',
      message: 'Function name: '
    },
    {
      type: 'autocomplete',
      name: 'component',
      message: 'Which component is this part of: ',
      choices: [{ title: 'NEW COMPONENT', value: 'new' }, ...componentList]
    },
    {
      type: (prev) => (prev == 'new' ? 'text' : null),
      name: 'newComponentName',
      message: 'Name of component: '
    }
  ];

  return await prompts(questions);
};
