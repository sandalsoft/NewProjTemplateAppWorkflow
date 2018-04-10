import changeCase from 'change-case';
import path from 'path';

/*
  PROJECT_ROOT          /Users/enelson/Development/NewProjTemplateAppWorkflow
  TESTROOT              /test
  TESTPROJECTDIR        /ProjectRootForTesting
  TESTPROJECTSRCDIR     /src
  TESTCOMPONENTDIR      /cli
  TESTFILENAME          /create-functiontest-file.js
*/

const TestingRoot = '/test';
const TestingProjectDir = '/ProjectRootForTesting';
const TestingProjectSrcDir = '/src';

export default {
  naming: {
    typescriptFileExtension: 'ts',
    javascriptFileExtension: 'js'
  },
  testing: {
    testingProjDirName: 'ProjectRootForTesting',

    Root: 'test',
    ProjectDir: 'ProjectRootForTesting',
    ProjectSrcDir: 'src',
    ComponentDir: (componentName) => {
      return path.join(
        '/Users/enelson/Development/NewProjTemplateAppWorkflow',
        TestingRoot,
        TestingProjectDir,
        TestingProjectSrcDir,
        componentName
      );
    },
    fileExtension: '.test.ts'
  },
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
