/* eslint-disable */
const changeCase = require('change-case');
module.exports = function(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      Program(path, state) {
        const functionName = state.opts.functionName;
        const newFilename = `./${changeCase.paramCase(functionName)}`;
        const newImportDec = t.importDeclaration(
          [
            t.importSpecifier(
              t.Identifier(functionName),
              t.Identifier(functionName)
            )
          ],
          t.stringLiteral(newFilename)
        );
        path.node.body.unshift(newImportDec);

        const newExport = t.exportSpecifier(
          t.Identifier(functionName),
          t.Identifier(functionName)
        );
        path.node.body.forEach((element) => {
          if (element.type === 'ExportNamedDeclaration') {
            element.specifiers.unshift(newExport);
          }
        });
      }
    }
  };
};
