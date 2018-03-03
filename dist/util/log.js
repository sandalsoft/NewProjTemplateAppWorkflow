'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = undefined;

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pe = new _prettyError2.default();
pe.skipNodeFiles();

const log = exports.log = msg => {
  if (typeof msg === 'object' || msg.__proto__.name === 'Error') {
    console.log(pe.render(msg));
  } else {
    console.log(msg);
  }
};
//# sourceMappingURL=log.js.map