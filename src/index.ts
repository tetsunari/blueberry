type UnaryFunc = (age: number) => number;
type BinaryFunc = (left: number, right: number) => number;
const double: UnaryFunc = age => age * 2;
const add: BinaryFunc = (left, right) => left + right;
const bin: BinaryFunc = double;
console.log(bin(10, 100));