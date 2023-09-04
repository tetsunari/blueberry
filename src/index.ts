type obj = { foo?: number };
const obj1: obj = {};
const obj2: obj = { foo: -1234 };
const { foo = 500 } = obj1;
// const foo = obj.foo !== undefined ? obj1.foo : 500; // 上記と同じ意味
console.log(foo);
const { foo: bar = 500 } = obj2;
console.log(bar);