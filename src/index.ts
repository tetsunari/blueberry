const obj = {
    "foo": 123,
    "foo bar": -500,
    "↑↓↑↓": ""
};
console.log(obj.foo); // 123
console.log(obj["foo bar"]); // -500

const obj1 = {
    1: "one",
    2.05: "two point o five",
};
console.log(obj1["1"]); // one
console.log(obj1["2.05"]); // two point o five

const propName = "foo";
const obj2 = {
    [propName]: 123
};
console.log(obj2.foo); // 123