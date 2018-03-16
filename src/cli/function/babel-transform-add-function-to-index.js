module.exports = function(babel) {
  const { types: t } = babel;

  const newFunc = 'shoeOnHead';
  const newFilename = './shoe-on-head';

  return {
    visitor: {
      Program(path) {
        const newImportDec = t.importDeclaration(
          [t.importSpecifier(t.Identifier(newFunc), t.Identifier(newFunc))],
          t.stringLiteral(newFilename)
        );
        path.node.body.unshift(newImportDec);

        const newExport = t.exportSpecifier(
          t.Identifier(newFunc),
          t.Identifier(newFunc)
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
