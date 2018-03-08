import fs from 'fs';
import path from 'path';

export const canCreateComponent = (newComponentName) => {
  return (
    fs.existsSync('./package.json') &&
    !fs.existsSync(path.join('src', newComponentName))
  );

  // const srcDir = './src';
  // console.log(`srcDir: ${JSON.stringify(srcDir)}`);
  // console.log(`newComponentName: ${JSON.stringify(newComponentName)}`);
  // console.log('==');

  // // check for package
  // console.log(`process.cwd(): ${JSON.stringify(process.cwd())}`);
  // const packageJsonFile = `${srcDir}/../package.json`;
  // console.log(`packageJsonFile: ${JSON.stringify(packageJsonFile)}`);
  // const doesPackageJsonExist = fs.existsSync(packageJsonFile);
  // console.log(`doesPackageJsonExist: ${JSON.stringify(doesPackageJsonExist)}`);

  // // check if component already exists
  // const componentDir = `${srcDir}/${newComponentName}`;
  // console.log(`componentDir: ${JSON.stringify(componentDir)}`);
  // const doesComponentDirExist = !fs.existsSync(componentDir);
  // console.log(
  //   `doesComponentDirExist: ${JSON.stringify(doesComponentDirExist)}`
  // );

  // // check that src dir is the basename of passed in srcDir
  // console.log(`srcDir: ${JSON.stringify(srcDir)}`);
  // const isSrcDirNamedSrc = path.basename(srcDir) === 'src';
  // console.log(`isSrcDirNamedSrc: ${JSON.stringify(isSrcDirNamedSrc)}`);

  // if (doesPackageJsonExist && doesComponentDirExist && isSrcDirNamedSrc) {
  //   console.log('\t TRUE - CAN CREATE COMP');
  //   console.log('---------------------------');
  //   return true;
  // } else {
  //   console.log('\t\tFALSE - ABORT');
  //   console.log('---------------------------');
  //   return false;
  // }
};

// if (fs.existsSync(`${srcDir}/../package.json`) && !fs.existsSync(`${srcDir}/${newComponentName}`)) {
//   return true;
// }
// return false;
