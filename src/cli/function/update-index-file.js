import path from 'path';
import changeCase from 'change-case';
import { transformCode } from '../../util/transform';
import {
  readFile,
  writeFile,
  fileExists,
  plugin
} from '../../util/side-effects';

export const updateIndexFile = ({ functionName, indexFilePath }) => {
  const filePath = indexFilePath;
  const indexFileData = readFile({ filePath });

  indexFileData.includes(functionName) &&
    (() => {
      throw new Error(`${functionName}() function already exists in index`);
    });

  const code = readFile({ filePath });
  transformCode({ functionName, plugin, code });
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
