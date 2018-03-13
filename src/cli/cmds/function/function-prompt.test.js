// import fs from 'fs-extra';
// import path from 'path';

import { functionPrompt } from './function-prompt';

/*
  proper path is used with different params passed in
  component prompt runs if user selects NEW COMPONENT
*/

// const projectRootDir =
//   '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/dummy_proj_for_cli';

// const componentList = fs
//   .readdirSync(projectRootDir)
//   .filter((file) => fs.statSync(path.join(projectRootDir, file)).isDirectory())
//   .map((component) => ({ title: component, value: component }));

test('passing proper srcDir returns proper directories', async () => {
  const expected = { name: 'testFunc', component: 'babels' };

  const actual = await functionPrompt({ answers: expected });
  expect(actual).toEqual(expected);
});

test('Answering NEW to component asks for new component name:', async () => {
  const expected = {
    name: 'testFunc',
    component: 'new',
    newComponentName: 'testComponent'
  };

  const actual = await functionPrompt({ answers: expected });
  expect(actual).toEqual(expected);
});
