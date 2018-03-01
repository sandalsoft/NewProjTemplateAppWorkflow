import Directory from 'directory-helpers';

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let obj = {
  foo: 'bar',
  ...z
};
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
console.log(obj);

class myBoss {
  durr() {
    console.log(hi);
  }
}
