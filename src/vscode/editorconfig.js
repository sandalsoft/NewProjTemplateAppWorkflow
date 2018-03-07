//https://code.visualstudio.com/docs/getstarted/theme-color-reference
export const workspaceConfig = {
  'workbench.colorCustomizations': {
    'editor.selectionBackground': '#6dccdd3f'
    // "statusBar.background": "#77f"
  }
};

export const userConfig = {
  // Place your settings in this file to overwrite the default settings
  // "editor.fontFamily": "Source Code Pro",
  'editor.fontFamily': 'Fira Code',
  'editor.fontLigatures': true,
  // Controls the font weight.
  'editor.fontWeight': '400',
  // Controls the font size in pixels.
  'editor.fontSize': 15,
  // The number of spaces a tab is equal to. This setting is overriden based on the file contents when `editor.detectIndentation` is on.
  'editor.tabSize': 2,
  // Insert spaces when pressing Tab. This setting is overriden based on the file contents when `editor.detectIndentation` is on.
  'editor.insertSpaces': true,
  // When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.
  'editor.detectIndentation': true,
  // Control the cursor animation style, possible values are 'blink', 'smooth', 'phase', 'expand' and 'solid'
  'editor.cursorBlinking': 'expand',
  // Customizes which terminal application to run on OS X.
  'terminal.external.osxExec': 'iTerm2.app',
  'eslint.autoFixOnSave': true,
  'git.enableSmartCommit': true,
  'workbench.colorTheme': 'Solarized-dark',
  'editor.rulers': [100, 120],
  'editor.formatOnSave': true,
  'prettier.singleQuote': true,
  'prettier.eslintIntegration': true,
  'javascript.format.enable': false,
  'workbench.startupEditor': 'newUntitledFile',
  'files.exclude': {
    '**/._*': true,
    'npm-debug*.log.*': true,
    'bin/*': true,
    '**/node_modules/': true,
    '**/*.lock': true,
    '**/*.log': true
  },
  'editor.scrollBeyondLastLine': false,
  'workbench.iconTheme': 'vscode-icons',
  'window.zoomLevel': 0,
  'editor.snippetSuggestions': 'top',
  'editor.minimap.enabled': false,
  'sublimeTextKeymap.promptV3Features': true,
  'editor.multiCursorModifier': 'ctrlCmd',
  'editor.formatOnPaste': true,
  'vsicons.dontShowNewVersionMessage': true,
  'explorer.confirmDragAndDrop': false,
  'editor.wordWrap': 'wordWrapColumn',
  'editor.wordWrapColumn': 100,
  // "nodeTdd.showCoverage": true,
  // "nodeTdd.reporter": "tap",
  'search.smartCase': true,
  'workbench.fontAliasing': 'auto',
  'editor.renderIndentGuides': false,
  'eslint.packageManager': 'yarn',
  'eslint.nodePath': '/usr/local/bin/node',
  'prettier.arrowParens': 'always',
  'eslint.enable': true
};
