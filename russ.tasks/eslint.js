const axios = require('axios');

module.exports = self = {
  name: 'eslint:fetch',
  doc: 'Gets .eslintrc file',
  pre: '',
  post: '',
  deps: ['axios'],

  repoURL:
    'https://raw.githubusercontent.com/sandalsoft/NewProjTemplateAppWorkflow/master/',

  fetchContent: url => axios(url),

  getEslint: async url => await self.fetchContent(`${url}.eslintrc`),

  func: async (axios, russ) => {
    try {
      const eslintReq = await self.getEslint(self.repoURL);
      const eslintData = eslintReq.data;
      // console.log(`eslintP.data: ${JSON.stringify(eslintData)}`);
      russ.resolve(eslintP.data);
    } catch (e) {
      russ.reject(e);
    }
  }
};
