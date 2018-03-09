exports.command = 'project [name] [dir]';
exports.desc = 'Create a new project';
exports.aliases = ['proj', 'p'];
exports.builder = {
  name: {
    alias: 'n'
  },
  dir: {
    alias: 'd',
    default: '.'
  }
};
exports.handler = function(argv) {
  console.log('project called for name', argv.name);
  console.log('project called for dir', argv.dir);
};
