// class User {
//     name: string;
//     private age: number;
//     private _isAdult: boolean;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         this._isAdult = this.age >= 20;
//     }

//     public isAdult(): boolean {
//         return this._isAdult;
//     }
// }
// class PremiumUser extends User {
//     public isAdult(): boolean {
//         return this.age >= 10; // error
//     }
// }
// const miniUhyo = new PremiumUser("uhyo", 15);
// const john = new User("john", 15);
// console.log(miniUhyo.isAdult());
// console.log(john.isAdult());

class User {
    name: string;
    protected age: number;
    private _isAdult: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this._isAdult = age >= 20;
    }

    public isAdult(): boolean {
        return this._isAdult;
    }
}

class PremiumUser extends User {
    public setAge(newAge: number) {
        this.age = newAge;
    }
}
const uhyo = new PremiumUser("uhyo", 26);
console.log(uhyo.isAdult()); // true
uhyo.setAge(15);
// _isAdultが更新されてないので正常に動作しない
console.log(uhyo.isAdult()); // true
