const User = {
    name: "uhyo",
    age: 26,
    isAdult() {
        return this.age >= 20;
    }
};
console.log(User.isAdult()); // true
User.age = 19;
console.log(User.isAdult()); // false
