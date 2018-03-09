exports.command = 'component [name]';
exports.desc = 'Create a new component';
exports.builder = {
  name: {
    alias: 'n'
  }
};
exports.handler = function(argv) {
  console.log('component called for name', argv.name);
};
