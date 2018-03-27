import * as fs from 'fs-extra';
import * as path from 'path';

const AnchorFiles = ['package.json', 'node_modules']; // 'tsconfig.json' for typescript projects

const dirIsProjectRoot = (
  { dir, anchors }: { dir?: string; anchors?: string[] } = {
    anchors: AnchorFiles
  }
): boolean => {
  const anchorList = anchors
    .map((anchor) => {
      return fs.existsSync(path.join(dir, anchor));
    })
    .filter((val) => {
      return val === true;
    });
  return anchorList.length === anchors.length ? true : false;
};

export const getProjectRootDir = (
  { dir, anchors }: { dir?: string; anchors?: string[] } = {
    anchors: AnchorFiles
  }
): string => {
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
