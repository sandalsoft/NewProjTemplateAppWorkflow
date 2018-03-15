import PrettyError from 'pretty-error';
import prettyFormat from 'pretty-format';

const formatOptions = {
  highlight: true
};

const pe = new PrettyError();
pe.skipNodeFiles();

export const log = (msg) => {
  typeof msg === 'object' && msg.__proto__.name === 'Error'
    ? console.trace(msg)
    : console.log(prettyFormat(msg, formatOptions));
};
