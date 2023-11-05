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

    // 親クラスのUserを継承しているので、booleanを返す必要がある
    public isAdult(): boolean {
        return true;
    }
}
const john = new User("john", 15);
const test = new PremiumUser("test", 15);
console.log(john.isAdult()); // false
console.log(test.isAdult()); // true
