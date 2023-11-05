class User<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
        this.name = name;
        this.#age = age;
        this.data = data;
    }
}
const uhyo = new User<string>("uhyo", 26, "追加データ");
const data = uhyo.data;
console.log(data); // 追加データ

const john = new User("john", 10, { num: 123 });
const data1 = john.data;
console.log(data1); // { num: 123 }
