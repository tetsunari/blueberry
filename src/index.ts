let tuple: [string, number] = ["foo", 0];
tuple = ["aiueo", -552];
const str = tuple[0];
const num = tuple[1];

type User = [name: string, age: number];
const uhyo: User = ["uhyo", 26];
console.log(uhyo[1]);
// console.log(uhyo.name); // error