const obj = { foo: null };
const { foo = 123 } = obj;
console.log(foo); // デフォルト値はundefinedのみに対して適応される

type Obj = { bar?: number };
const obj1: Obj = {};
const { bar = 500 } = obj1;
console.log(bar); // 500

type NestedObj = {
    obj?: {
        foobar: number
    }
};
const nested1: NestedObj = {
    obj: { foobar: 123 }
};
const nested2: NestedObj = {};
const { obj: { foobar: foo1 } = { foobar: 500 } } = nested1;
const { obj: { foobar: foo2 } = { foobar: 500} } = nested2;
console.log(foo1); // 123
console.log(foo2); // 500