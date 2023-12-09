type Human = {
    type: "human";
    name: string;
    age: number;
};
function setAge(human: Human, age: Human["age"]) {
    return {
        ...human,
        age
    };
}
const uhyo: Human = {
    type: "human",
    name: "uhyo",
    age: 26
};
const uhyo2 = setAge(uhyo, 27);
console.log(uhyo2); // { type: 'human', name: 'uhyo', age: 27 }

type Human2 = {
    type: "human";
    name: string;
    age: bigint;
};
function setAge2(human: Human2, age: Human2["age"]) {
    return {
        ...human,
        age
    };
}
const uhyo3: Human2 = {
    type: "human",
    name: "uhyo",
    age: 26n,
};
const uhyo4 = setAge2(uhyo3, 27n);
console.log(uhyo4); // { type: 'human', name: 'uhyo', age: 27n }
