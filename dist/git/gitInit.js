'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitInit = undefined;

var _nodeCmd = require('node-cmd');

var _nodeCmd2 = _interopRequireDefault(_nodeCmd);

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

const gitInit = exports.gitInit = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    return yield executeCmd('git init');
  });

  return function gitInit() {
    return _ref2.apply(this, arguments);
  };
})();
//# sourceMappingURL=gitInit.js.map