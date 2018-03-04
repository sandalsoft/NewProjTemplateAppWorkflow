'use strict';

var _util = require('./util');

var _git = require('./git');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const main = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      (0, _util.log)('lets do this!');
      // const githubUser = 'sandalsoft';
      // const projectName = 'boober';
      // await gitInit();
      // const output = await setGithubOrigin(githubUser, projectName);
      // const output = await gitignore('./.gitignore');
      const output = yield (0, _git.createGithubRepo)();
      (0, _util.log)(output);
    } catch (err) {
      (0, _util.log)(new Error(err.stack) || new Error(err));
    }
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
})();

main();
//# sourceMappingURL=index.js.map