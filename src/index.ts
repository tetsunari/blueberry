type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
}
const obj: MyObj = { foo: false, bar: true };
const obj1: MyObj = { foo: true, bar: false, baz: 1234 };
console.log(obj.baz); // undefined
console.log(obj1.baz); // 1234
// console.log(obj1.baz * 1000); // error
if (obj1.baz !== undefined) {
    console.log(obj1.baz * 1000); // 1234000
}