'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitignore = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const gitignoreURL = 'https://gist.githubusercontent.com/sandalsoft/9ce8d5454f00efa6e42d5b5f5a9f5af8/raw/f2bfca11a1b59fde56773eab7a54d8704e359b68/.gitignore';

const gitignore = exports.gitignore = (() => {
  var _ref = _asyncToGenerator(function* (gitignoreFile) {
    try {
      const gitignoreRes = yield (0, _axios2.default)(gitignoreURL);
      const gitignoreData = gitignoreRes.data;
      _fs2.default.writeFileSync(gitignoreFile, gitignoreData);
      return `Successfully wrote ${gitignoreFile}`;
    } catch (err) {
      return Promise.reject(err);
    }
  });

  return function gitignore(_x) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=gitignore.js.map