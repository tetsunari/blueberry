const str = "Hello, world";
console.log(str.length); // 12

type HasLength = { length: number };
const obj:HasLength = "foobar";

let val: {} = 123;
val = "foobar";
val = { num: 1234 };
// val = null; // error
// val = undefined; // error