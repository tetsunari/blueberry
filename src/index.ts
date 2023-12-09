console.log(typeof "uhyo"); // string
console.log(typeof 42); // number
console.log(typeof {}); // object
console.log(typeof undefined); // undefined

function formatNumberOrString(value: string|number) {
    if (typeof value === "number") {
        return value.toFixed(3);
    } else {
        return value;
    }
}
console.log(formatNumberOrString(3.14)); // 3.140
console.log(formatNumberOrString("hello")); // hello
