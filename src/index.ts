let greeting: string = "Hello, ";
let target: string = "world!";
console.log(greeting + target);

const greeting1 = "Hello, ";
// コンパイルエラー
greeting1 = greeting1 + "world!";

let greeting2, target2;
greeting2 = "Hello, ";
target2 = "world!";
console.log(greeting2 + target2);


let greeting3: string, target3: string;
greeting3 = "Hello, ";
target3 = "world!";
console.log(greeting3 + target3);

let greeting4: string, target4: string;
greeting4 = "Hello, ";
// target4が定義されていないのでエラー
console.log(greeting4 + target4);