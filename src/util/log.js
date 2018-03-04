import PrettyError from 'pretty-error';
import prettyFormat from 'pretty-format';

const formatOptions = {
  highlight: true
};

const pe = new PrettyError();
pe.skipNodeFiles();

export const log = (msg) => {
  if (typeof msg === 'object' && msg.__proto__.name === 'Error') {
    // console.log(pe.render(msg));
    console.trace(msg);
  } else {
    console.log(prettyFormat(msg, formatOptions));
  }
};
