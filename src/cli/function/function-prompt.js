import prompts from 'prompts';
import path from 'path';

import { directoryList } from '../../util/side-effects';

export const functionPrompt = async ({
  srcDir = path.join(process.cwd(), 'src'),
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
      name: 'functionName',
      message: 'Function name: '
    },
    {
      type: 'autocomplete',
      name: 'componentName',
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
