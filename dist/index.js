'use strict';

var _directoryHelpers = require('directory-helpers');

var _directoryHelpers2 = _interopRequireDefault(_directoryHelpers);

var _nodeCmd = require('node-cmd');

var _nodeCmd2 = _interopRequireDefault(_nodeCmd);

var _util = require('util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cmd = (0, _util.promisify)(_nodeCmd2.default.get, { multiArgs: true, context: _nodeCmd2.default });

var main = async function main() {
  try {
    var output = await cmd('git log | more');
    console.log(output);
  } catch (err) {
    console.log('err: ' + JSON.stringify(err));
  }
};

main();