type HasName = {
    age: number;
}
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function getPrice(customer: HasName) {
    if (customer instanceof User) {
        if (customer.name === "uhyo") {
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 1800;
}
const customer1: HasName = { age: 15 };
const customer2: HasName = { age: 40 };
const uhyo = new User("uhyo", 26);
console.log(getPrice(customer1)); // 1000
console.log(getPrice(customer2)); // 1800
console.log(getPrice(uhyo)); // 0
