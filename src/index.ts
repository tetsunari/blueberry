class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    isAdult(): boolean {
        return this.age >= 20;
    }
}
const uhyo = new User("uhyo", 26);
console.log(uhyo.name);
console.log(uhyo.isAdult());


class readUser {
    name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setAge(newAge: number) {
        this.age = newAge; // error
    }
}
const readUhyo = new readUser("read", 26);
readUhyo.age = 27; // error
