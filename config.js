module.exports = {
  cli: {
    functionText: (functionName) => {
      return `import { log } from './util';

export const ${functionName} = async() => {

};`;
    }
  }
};
