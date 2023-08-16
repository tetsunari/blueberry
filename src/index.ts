type PriceData = {
    [key: string]: number;
}
const data: PriceData = {
    apple: 220,
    coffee: 120,
    bento: 500,
};
data.chicken = 250;
// data.弁当 = "foo"; // error

type MyObj = { [key: string]: number };
const obj: MyObj = { foo: 123 };
const num: number = obj.bar;
console.log(num); // undefined

const propName: string = "foo";
const obj1 = {
    [propName]: 123
};
console.log(obj1.foo); // 123
