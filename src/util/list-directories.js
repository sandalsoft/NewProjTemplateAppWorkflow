import path from 'path';
import fs from 'fs-extra';

export const listDirectories = (baseDir = path.join(process.cwd(), 'src')) =>
  fs
    .readdirSync(baseDir)
    .filter((f) => fs.statSync(path.join(baseDir, f)).isDirectory());
