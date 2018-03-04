'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = undefined;

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

var _prettyFormat = require('pretty-format');

var _prettyFormat2 = _interopRequireDefault(_prettyFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formatOptions = {
  highlight: true
};

const pe = new _prettyError2.default();
pe.skipNodeFiles();

const log = exports.log = msg => {
  if (typeof msg === 'object' && msg.__proto__.name === 'Error') {
    // console.log(pe.render(msg));
    console.trace(msg);
  } else {
    console.log((0, _prettyFormat2.default)(msg, formatOptions));
  }
};
//# sourceMappingURL=log.js.map