const axios = require('axios');

module.exports = self = {
  name: 'fetch',
  doc: 'Gets content from a URL',
  pre: '',
  post: '',
  deps: ['axios'],

  func: async (axios, russ) => url => axios(url)
};
