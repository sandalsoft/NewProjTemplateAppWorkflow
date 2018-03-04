'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGithubRepo = undefined;

var _nodeCmd = require('node-cmd');

var _nodeCmd2 = _interopRequireDefault(_nodeCmd);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _util = require('util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const exec = (0, _util.promisify)(_nodeCmd2.default.get, { multiArgs: true, context: _nodeCmd2.default });
const executeCmd = (() => {
  var _ref = _asyncToGenerator(function* (cmd) {
    return yield exec(cmd);
  });

  return function executeCmd(_x) {
    return _ref.apply(this, arguments);
  };
})();

const removeNewline = str => str.slice(0, str.length - 1);

const createGithubRepo = exports.createGithubRepo = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    const githubUserOutput = yield executeCmd('(git config github.user)');
    const githubUser = removeNewline(githubUserOutput);

    const githubTokenOutput = yield executeCmd('(git config github.token)');
    const githubToken = removeNewline(githubTokenOutput);

    // const dirOutput = await executeCmd('basename `pwd`');
    const dirOutput = 'proj\n';
    const dir = removeNewline(dirOutput);

    const projectName = `${dir}x`;
    const projectDesc = `${projectName} - Could use a little more description`;

    const config = {
      url: 'https://api.github.com/user/repos',
      method: 'post',
      auth: {
        username: githubUser,
        password: githubToken
      },
      data: {
        name: projectName,
        description: projectDesc,
        private: true,
        has_issues: true,
        has_wiki: true,
        has_downloads: false
      }
    };

    const response = yield _axios2.default.request(config);
    return response.status;
  });

  return function createGithubRepo() {
    return _ref2.apply(this, arguments);
  };
})();
//# sourceMappingURL=createGithubRepo.js.map