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

    constructor(name: string, age: number, rank: number) {
        // superはthis.の前に置く必要がある
        super(name, age);
        this.rank = rank;
    }
}
const test = new PremiumUser("test", 15, 3);
console.log(test.name);
console.log(test.rank);
console.log(test.isAdult());
