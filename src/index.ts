const obj: {
    foo: number,
    bar: string,
} = {
    foo: 123,
    bar: true,
};

const obj1: {
    foo: number,
    bar: string,
} = {
    foo: 123,
};

const obj2 = {
    foo: 123,
    bar: "Hello, world",
};
obj2.foo = null;

const ojb3 = {
    foo: 123,
    bar: "Hello, world",
};
console.log(ojb3.hoge);