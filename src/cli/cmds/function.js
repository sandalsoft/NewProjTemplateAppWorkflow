const prompts = require('prompts');
/*

- Ask which compoennt function is part of (Autocomplete list for existing coponents) - Or default to recently created component above
 - create funtion-name.js file
 - import { log, rejectIfMissing, etc } in function-name.js
 - stub 'const functionName = () => { \n\n\n }'
 - export functionName at bottom
 - create function-name.test.js file
 - add import/export to index.js

 */

exports.command = 'function';
exports.desc = 'Create a new function';
exports.aliases = ['func', 'f'];
exports.builder = {
  name: {
    alias: 'n'
  },
  component: {
    alias: 'c'
  }
};

exports.handler = function(argv) {
  console.log(`function called with ${JSON.stringify(argv)}`);
};
/**
 * Find a way to get async execution context for the exports.middlewares
 *  Need to set async() scope on the command.middleware property, if possible
 * Try to utils.promisify the command.addHandler() method to async is
 *  OR
 * Look for Sync prompts/readline lib
 * OR
 * Look for Async args processing lib with middleware-like capabilities

 */
exports.middlewares = [
  async () => {
    await prompts({
      type: 'text',
      name: 'name',
      message: 'function name'
    });
  }
];
