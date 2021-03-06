// import path from 'path';

import { functionPrompt } from './function-prompt';

/*
  proper path is used with different params passed in
  component prompt runs if user selects NEW COMPONENT
*/

// const projectRootDir =
//   '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/ProjectRootForTesting';

test('passing proper srcDir returns proper directories', async () => {
  const expected = { functionName: 'testFunc', componentName: 'babel' };

  const actual = await functionPrompt({ answers: expected });
  expect(actual).toEqual(expected);
});

test('Answering NEW to component asks for new component name:', async () => {
  const expected = {
    functionName: 'testFunc',
    componentName: 'new',
    newComponentName: 'testComponent'
  };

  const actual = await functionPrompt({ answers: expected });
  expect(actual).toEqual(expected);
});
