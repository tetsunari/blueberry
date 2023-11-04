class User {
    static adminName: string = 'uhyo';
    static getAdminUser() {
        return new User(User.adminName, 24);
    }

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
console.log(User.adminName);
const admin = User.getAdminUser();
console.log(admin.name);
console.log(admin.isAdult());
const uhyo = new User("test", 26);
console.log(uhyo.name);
