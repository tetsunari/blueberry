type obj = { foo?: number };
const obj1: obj = {};
const obj2: obj = { foo: -1234 };
const { foo = 500 } = obj1;
console.log(foo);
const { foo: bar = 500 } = obj2;
console.log(bar);