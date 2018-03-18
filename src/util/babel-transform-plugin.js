// eslint-disable-next-line import/no-commonjs
const changeCase = require('change-case');

// eslint-disable-next-line import/no-commonjs, fp/no-mutation
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
        // eslint-disable-next-line  fp/no-mutating-methods
        path.node.body.unshift(newImportDec);

        const newExport = t.exportSpecifier(
          t.Identifier(functionName),
          t.Identifier(functionName)
        );
        path.node.body.forEach((element) => {
          element.type === 'ExportNamedDeclaration' &&
            // eslint-disable-next-line  fp/no-mutating-methods
            element.specifiers.unshift(newExport);
        });
      }
    }
  };
};
