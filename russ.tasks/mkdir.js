const mkdirp = require('mkdirp');

module.exports = self = {
  name: 'mkdir',
  doc: 'mkdir directory',
  pre: '',
  post: '',
  deps: ['mkdirp'],

  func: (mkdirp, russ) => {
    russ.config.pluginOpts.mkdir.dirs.map(dir => {
      mkdirp(dir, function(err) {
        if (err) console.error(err);
        else console.log(`${dir} created`);
      });
    });
  }
};
