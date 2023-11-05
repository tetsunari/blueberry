class User {
    static adminUser: User;
    static {
        this.adminUser = new User;
        this.adminUser.#age = 999;
    }

    #age: number = 0;
    getAge() {
        return this.#age;
    }

    setAge(age: number) {
        if (age < 0 || age > 150) {
            return;
        }
        this.#age = age;
    }
}
console.log(User.adminUser.getAge()); // 999
const test = new User();
console.log(test.getAge()); // 0
test.setAge(100);
console.log(test.getAge()); // 100
test.setAge(1000);
console.log(test.getAge()); // 100
