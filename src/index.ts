class User {
    name: string = "";
    age: number = 0;
}
type MyYserConstructor = new () => User;
const MyUser: MyYserConstructor = User;
const u = new MyUser();
console.log(u.name, u.age);
