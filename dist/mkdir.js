'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _directoryHelpers = require('directory-helpers');

var _directoryHelpers2 = _interopRequireDefault(_directoryHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mkdir = async function mkdir() {
  var dirName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : './dummy';

  var directory = new _directoryHelpers2.default(dirName);
  await directory.create();
};

exports.default = mkdir;