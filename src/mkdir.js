import Directory from 'directory-helpers';

const mkdir = async (dirName = './dummy') => {
  const directory = new Directory(dirName);
  await directory.create();
};

export default mkdir;
