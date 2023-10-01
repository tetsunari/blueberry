type User = { name: string, age: number };
const users: User[] = [
    { name: "Uhyo", age: 26 },
    { name: "john", age: 15 },
];
const names = users.map((u: User): string => u.name);
console.log(names); // [ 'Uhyo', 'john' ]
const adultUsers = users.filter((user: User) => user.age >= 20);
console.log(adultUsers); // [ { name: 'Uhyo', age: 26 } ]
const allAdult = users.every((user: User) => user.age >= 20);
console.log(allAdult); // false
const seniorExists = users.some((user: User) => user.age >= 60);
console.log(seniorExists); // false
const john = users.find((user: User) => user.name.startsWith("john"));
console.log(john); // { name: 'john', age: 15 }