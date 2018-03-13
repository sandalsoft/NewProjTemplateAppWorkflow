module.exports = {
  cli: {
    functionText: (functionName) => {
      return `import { log, rejectIfMissing } from './util';

export const ${functionName} = async() => {

};`;
    },
    /**
     *
     *
     *
     *
     *   TEST



     */
    testText: ({ functionName, testFileName }) => {
      return `import { ${functionName} } from './${testFileName}';

beforeEach(() => {
  true;
});

afterEach(() => {
  true;
});

test('description:', async () => {
  const actual = true;

  // ${functionName}();
  const expected = false;
  expect(actual).toEqual(expected);
});`;
    }
    // testDir: { projectDir, componentName, functionName } => {
    //   return {projectDir}, test
    // }
  }
};
