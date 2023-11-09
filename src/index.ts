class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult() {
        return this.#age >= 20;
    }
}
const uhyo = new User('uhyo', 25);
const john = new User('John', 17);
console.log(uhyo.isAdult()); // true
console.log(uhyo.isAdult.apply(john, [])); // false

const boundIsAdult = uhyo.isAdult.bind(uhyo);
console.log(boundIsAdult()); // true
console.log(boundIsAdult.call(john)); // true
