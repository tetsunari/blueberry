const num: number = 0;
type T = typeof num;
const foo: T = 123;

const obj = {
    foo: 123,
    bar: "hi"
};
type O = typeof obj;
const obj2: O = {
    foo: -50,
    bar: ""
};

const res: typeof foo = typeof bar;