import path from 'path';
import changeCase from 'change-case';
import { transformCode } from '../../util/transform';
import { readFile, writeFile, fileExists } from '../../util/side-effects';

// const plugin = require('../../util/babel-transform-plugin ');
const pluginFilename = '../../util/babel-transform-plugin ';
export const updateIndexFile = ({ functionName, indexFilePath }) => {
  const filePath = indexFilePath;
  console.log(`filePath: ${JSON.stringify(filePath)}`);
  const indexFileData = readFile({ filePath });
  console.log(`indexFileData: ${JSON.stringify(indexFileData)}`);
  console.log(`functionName: ${JSON.stringify(functionName)}`);
  console.log(`plugin: ${JSON.stringify(pluginFilename)}`);

  indexFileData.includes(functionName) &&
    (() => {
      throw new Error(`${functionName}() function already exists in index`);
    });

  try {
    const code = readFile({ filePath });
    console.log(`code: ${JSON.stringify(code)}`);
    const fileData = transformCode({ functionName, pluginFilename, code });
    console.log(`fileData: ${JSON.stringify(fileData)}`);
    return writeFile({ filePath, fileData });
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 * const functionName = path.value.name
 * const fileName = path.parentPath.parentPath.parentPath.value.source.value
 * // if (path.name === local && path.parentPath.value.type === ImportSpecifier)
 * path.parentPath.value.type === ImportSpecifier || ExportSpecifier
 *
 * "local"
 * if (parentPath.value.type == "ExportSpecifier")
 *  const exports = parentPath.parentPath.value
 *
 *
 *
 *
 if (path.name === 'local')  {
          	if (path.parentPath.value.type === 'ImportSpecifier' && path.parentPath.parentPath.parentPath.value.type === 'ImportDeclaration') {
           		const functionName = path.value.name
           		const fileName = path.parentPath.parentPath.parentPath.value.source.value
         		console.log(functionName, ' * ', fileName)
            }

            // runs through this twice and gets 2 exports
           if (path.parentPath.value.type === "ExportSpecifier") {
      			const exports = path.parentPath.parentPath.value.map(exp => {
                   return exp.local.name;
                });

             	console.log(exports);
    		}

         }




 */

/**
 *   create(context) {
    return {
      Identifier(node) {
        if (node.parent.type === 'ImportSpecifier') {
          const functionName = node.name;
          const fileName = node.parent.parent.source.value;
          console.log(functionName, '  ', fileName);
          context.report(node, ' <-- ');
        }
      }
    }
  }
 */
