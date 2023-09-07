const obj = {
    foo: 123,
    bar: "string",
    baz: false,
};
const { foo, ...restObj } = obj;
console.log(foo); // 123
console.log(restObj); // { bar: 'string', baz: false }

const arr = [1, 2, 3, 5, 8, 13];
const [first, second, third, ...rest] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(rest); // [5, 8, 13]