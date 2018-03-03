import PrettyError from 'pretty-error';

const pe = new PrettyError();
pe.skipNodeFiles();

export const log = msg => {
  if (typeof msg === 'object' || msg.__proto__.name === 'Error') {
    console.log(pe.render(msg));
  } else {
    console.log(msg);
  }
};
