const obj = {
    foo: 555,
    bar: '文字列',
};

console.log(obj.foo);
console.log(obj.bar);

const user = {
    name: input ? input : '名無し',
    age: 20,
}

const name1 = input ? input : '名無し';
const user1 = {
    name: name1,
    age: 20,
}

const name = input ? input : '名無し';
const user2 = {
    name,
    age: 20,
}