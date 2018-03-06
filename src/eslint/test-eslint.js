// Import checker - NOT WORKING, but that's probably ok
// import { log } from '../util';

const boo = require('util');
console.log(boo);

// const books = ['gat', 'hieaf'];
// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   console.log(book.title);
// }

// Immutable - WORKS
// const c = 'i am immutable!';
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

// Throw new error - plugin/unicorn - WORKS
// const e =  Error('errors are bad mmkay');
// throw e;

// Not sure what this does but it doen'st work
// [...'hello'].map(() => 'nope');

// Process.exit() - WORKS
// process.exit();

// Throw new Error - WORKS
// throw new Error('hi');

// Regex optimization - WORKING
// const re = /\w\w*{1,}/;
// console.log(re);
