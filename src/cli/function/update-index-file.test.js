import { updateIndexFile } from './update-index-file';
import { removeFile, readFile } from '../../util/side-effects';
import Config from '../../../config';

const functionName = 'codeStuff';
const indexFilePath =
  '/Users/enelson/Development/NewProjTemplateAppWorkflow/test/cli/ProjectRootForTesting/index.js';
const indexImportLine = Config.cli.indexFileImportModuleLine(functionName);

//
//
//////////////
//
//

test('index file is updated with proper text:', () => {
  const isIndexisFileUpdated = updateIndexFile({ functionName, indexFilePath });

  const dataFromFile = readFile({ filePath: indexFilePath });

  const expected = true;
  const actual =
    dataFromFile.includes(indexImportLine) &&
    dataFromFile.includes('export { ${functionName},');

  expect(actual).toEqual(expected);
});

test('test file is updated:', () => {
  const actual = true;

  const expected = false;
  expect(actual).toEqual(expected);
});
