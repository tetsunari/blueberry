type Animal = {
    species: string;
    age: string;
};
type Human = {
    name: string;
    age: number;
};
type User = Animal | Human;

const tama: User = {
    species: 'Felis silverstris catus',
    age: '永遠の17歳',
};
const uhyo: User = {
    name: 'uhyo',
    age: 26,
};

function showAge(user: User) {
    const age = user.age;
    console.log(age);
}

type MysteryFun =
    | ((str: string) => string)
    | ((str: string) => number);
function userFunc(func: MysteryFun) {
    const result = func('test');
    console.log(result);
}
