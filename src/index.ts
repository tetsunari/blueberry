const { foo, bar } = obj;
const {
    foo,
    bar: barVar,
    "foo bar": foobar
} = obj1;

const obj2 = {
    str: "hello, world",
    num: 1234
};
const {
    foo
} = obj2; // error