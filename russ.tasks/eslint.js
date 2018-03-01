const axios = require('axios');
const jsonfile = require('jsonfile');
const { promisify } = require('util');

module.exports = self = {
  name: 'eslint',
  doc: 'Gets remote .eslintrc file and writes locally',
  pre: '',
  post: '',
  deps: ['axios', 'jsonfile'],
  func: async (axios, jsonfile, russ) => {
    try {
      const eslintReq = await axios(
        russ.config.pluginOpts.eslint.remoteFileURL
      );
      const eslintData = eslintReq.data;

      console.log(
        `Successfully fetched ${russ.config.pluginOpts.eslint.remoteFileURL}`
      );
      var file = russ.config.pluginOpts.eslint.localFile;

      const asyncWriteFile = promisify(jsonfile.writeFile);
      const eslintWriteResult = await asyncWriteFile(file, eslintData, {
        spaces: 2
      });

      console.log(`Successfully wrote ${file}`);
      russ.resolve();
    } catch (e) {
      russ.reject(e);
    }
  }
};
