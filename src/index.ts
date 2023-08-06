const foo = { num: 1234 };
const bar = foo;
console.log(bar.num); // 1234
bar.num = 0;
console.log(foo.num); // 0

const foo1 = { num: 1234 };
const bar1 = { ...foo1 };
console.log(bar1.num); // 1234
bar1.num = 0;
console.log(foo1.num); // 1234

const foo2 = { obj: { num: 1234 } };
const bar2 = { ...foo2 };
bar2.obj.num = 0;
console.log(foo2.obj.num); //0

const foo3 = { num: 1234 };
const bar3 = foo3;
const baz3 = { num: 1234 };
console.log(foo3 === bar3); // true
console.log(foo3 === baz3); // false