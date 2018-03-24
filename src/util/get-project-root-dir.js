import fs from 'fs-extra';
import path from 'path';

const AnchorFiles = ['package.json', 'node_modules'];

const dirIsProjectRoot = ({ dir, anchors = AnchorFiles }) => {
  const anchorList = anchors
    .map((anchor) => {
      return fs.existsSync(path.join(dir, anchor));
    })
    .filter((val) => {
      return val === true;
    });
  return anchorList.length === anchors.length ? true : false;
};

export const getProjectRootDir = ({
  dir = process.cwd(),
  anchors = AnchorFiles
}) => {
  !dir &&
    (() => {
      return false;
    });

  dir === '/' &&
    (() => {
      return '/';
    });

  return dirIsProjectRoot({ dir, anchors })
    ? dir
    : getProjectRootDir({ dir: path.join(dir, '..') });
};
