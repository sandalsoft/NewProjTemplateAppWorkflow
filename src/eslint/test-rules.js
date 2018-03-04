// Import checker - NOT WORKING, but that's probably ok
import { log } from '../util';

log('hi');

// Regex optimization - WORKING
const re = /\w\w*{1,}/;
console.log(re);

// Immutable - WORKS
// Const c = 'i am immutable!';
// c = 'jj';

// No loops & security- WORKS
// const books = ['gat', 'hieaf'];
// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   console.log(book.title);
// }

// Promises - WORKS
// Promise.resolve(1)
//   .then(() => {
//     throw new Error('oops');
//   })
//   .catch(log);

// Throw new error - WORKS
// throw Error();

[...'hello'].map(() => 'nope');

// Process.exit() - WORKS
// process.exit();

// Throw new Error - WORKS
// throw new Error('hi');
