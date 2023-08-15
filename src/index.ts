type FooBarObj = {
    foo: number;
    bar: string;
};
const obj: FooBarObj = {
    foo: 123,
    bar: "Hello, world",
};

const obj1: FooBarObj1 = {
    foo: 123,
    bar: "Hello, world",
};
type FooBarObj1 = {
    foo: number;
    bar: string;
};

type UserId = string;
const id: UserId = "uhyo";

type FooBar = { foo: number };
type MyObj = FooBar;
const obj2: MyObj = { foo: 0 };