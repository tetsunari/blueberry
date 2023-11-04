class User {
    name?: string;
    age: number = 0;
}
const uhyo = new User();
console.log(uhyo.name); // undefined
uhyo.name = "ウヒョ";
console.log(uhyo.name); // ウヒョ


class User1 {
    readonly name: string = '';
    age: number = 0;
}
const test = new User1();
test.name = "test"; // error
