import * as fs from 'fs-extra';
import * as path from 'path';

const AnchorFiles = ['package.json', 'node_modules'];

// https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument/32596200#32596200

export const getProjectRootDir = ({
  dir = process.cwd(),
  anchors = AnchorFiles
}: {
  dir?: string;
  anchors?: string[];
} = {}): string => {
  console.log(`dir: ${JSON.stringify(dir)}`);
  console.log(`anchors: ${JSON.stringify(anchors)}`);
  !dir &&
    (() => {
      return false;
    });

  dir === '/' &&
    (() => {
      return '/';
    });

  return isDirProjectRoot({ dir, anchors })
    ? dir
    : getProjectRootDir({ dir: path.join(dir, '..'), anchors: AnchorFiles });
};

const isDirProjectRoot = ({
  dir,
  anchors = AnchorFiles
}: {
  dir: string;
  anchors?: string[];
}): boolean => {
  const anchorList = AnchorFiles.map((anchor) => {
    return fs.existsSync(path.join(dir, anchor));
  }).filter((val) => {
    return val === true;
  });
  return anchorList.length === anchors.length ? true : false;
};
