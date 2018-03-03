'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _directoryHelpers = require('directory-helpers');

var _directoryHelpers2 = _interopRequireDefault(_directoryHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const mkdir = (() => {
  var _ref = _asyncToGenerator(function* (dirName = './dummy') {
    const directory = new _directoryHelpers2.default(dirName);
    yield directory.create();
  });

  return function mkdir() {
    return _ref.apply(this, arguments);
  };
})();

exports.default = mkdir;
//# sourceMappingURL=mkdir.js.map