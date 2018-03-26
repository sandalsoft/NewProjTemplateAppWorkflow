import changeCase from 'change-case';
export default {
  git: {
    gitignoreURL:
      'https://gist.githubusercontent.com/sandalsoft/9ce8d5454f00efa6e42d5b5f5a9f5af8/raw/.gitignore'
  },
  cli: {
    indexFileImportModuleLine: (functionName) => {
      return `import { ${functionName} } from './${changeCase.paramCase(
        functionName
      )}';`;
    },
    indexFileExportModuleLine: (functionName) => {
      return `export { ${functionName} };`;
    },
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
    testData: ({ functionName, testFileName }) => {
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
  }
};
