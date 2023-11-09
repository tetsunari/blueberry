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

    public filterOlder(users: readonly User[]): User[] {
        return users.filter(u => u.#age > this.#age);
    }

    public filterOlder2(users: readonly User[]): User[] {
        // error: this implicitly has type any because it does not have a type annotation.ts(2683)
        return users.filter(function(u) {return u.#age > this.#age;});
    }

    public filterOlder3(users: readonly User[]): User[] {
        return users.filter(function(this: User, u) {return u.#age > this.#age;});
    }

    public filterOlder4(users: readonly User[]): User[] {
        const _this = this;
        return users.filter(function(u) {return u.#age > _this.#age;});
    }
}
const uhyo = new User("uhyo", 25);
const john = new User('john', 15);
const bob = new User('bob', 30);
const older = uhyo.filterOlder([john, bob]);
console.log(older);  // [ User { name: 'bob' } ]
