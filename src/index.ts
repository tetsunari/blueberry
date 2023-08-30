const arr = [1, 2, 4, 8, 16, 32];
const [first, second, third] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 4
/**
 * const first = arr[0];
 * const first = arr[1];
 * const first = arr[2];
 */

// const { arr: [foo] } = obj;
// console.log(obj);

// const [{ name }] = arr;

const [, foo, , bar, , baz] = arr;
console.log(foo); // 2
console.log(bar); // 8
console.log(baz); // 32

const tuple: [string, number] = ["uhyo", 26];
const [myName, age] = tuple;
console.log(myName); // uhyo
console.log(age); // 26