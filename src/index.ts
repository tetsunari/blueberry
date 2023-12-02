const uhyo1 = "uhyo";
// uhyo1は"uhyo"型
let uhyo2 = "uhyo";
// uhyo2はstring型

let uhyo: string|number = "uhyo";
uhyo = "john";
uhyo = 3.14;

let uhyo3: "uhyo"|"john" = "uhyo";

const uhyo4 = {
    name: "uhyo",
    age: 26
};
uhyo4.name = "john";

type Human = {
    readonly name: string;
    readonly age: number;
}
const uhyo5: Human = {
    name: "uhyo",
    age: 26
};

type Uhyo = {
    name: "uhyo",
    age: number
};
const uhyo6: Uhyo = {
    name: "uhyo",
    age: 26
};

function signNumber(type: "plus" | "minus") {
    return type === "plus" ? 1 : -1;
}
function useNumber(num: number) {
    return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}
signNumber("uhyo"); // Argument of type '"uhyo"' is not assignable to parameter of type '"plus" | "minus"'.
useNumber("uhyo"); // Argument of type '"uhyo"' is not assignable to parameter of type 'number'.
