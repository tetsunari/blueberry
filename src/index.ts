const obj1 = {
    bar: 456,
    baz: 789,
};

const obj2 = {
    foo: 123,
    ...obj1
};
console.log(obj2); // { foo: 123, bar: 456, baz: 789 }


const obj3 = {
    foo: 123,
    bar: 456,
    baz: 789,
};

const obj4 = {
    ...obj3,
    foo: -999,
};
console.log(obj4); // { foo: -999, bar: 456, baz: 789 }


// const obj5 = {
    // foo: 123,
    // bar: 456,
    // baz: 789,
// };
//
// const obj6 = {
    // foo: -999,
    // ...obj5
// };
// 'foo' is specified more than once, so this usage will be overwritten.


const obj7 = {
    foo: 123,
    bar: 456,
};
const obj8 = {
    bar: -999,
    baz: -9999,
};
const obj9 = {
    ...obj7,
    ...obj8
};
console.log(obj9); // { foo: 123, bar: -999, baz: -9999 }
