class User {
    name: string = '';
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 20;
    }

    setAge(newAge: number) {
        this.age = newAge;
    }
}
const uhyo = new User();
console.log(uhyo.isAdult()); // false
uhyo.setAge(25);
console.log(uhyo.isAdult()); // true
const test = new User();
test.age = 30;
console.log(test.isAdult()); // true
