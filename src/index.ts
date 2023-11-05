class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }
}
class PremiumUser extends User {
    rank: number = 1;
}
const uhyo = new PremiumUser("uhyo", 26);
console.log(uhyo.rank); // 1
console.log(uhyo.name); // uhyo
console.log(uhyo.isAdult()); // true

function getMessage(u: User) {
    return `こんにちは、${u.name}さん`;
}
const john = new User("john", 15);
const test = new PremiumUser("test", 26);
console.log(getMessage(john)); // こんにちは、johnさん
console.log(getMessage(test)); // こんにちは、testさん
