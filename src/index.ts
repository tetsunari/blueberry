const r = /ab+c/;
console.log(r.test("abbbbbc")); // true
console.log(r.test("Hello, abc world!")); // true
console.log(r.test("ABC")); // false
console.log(r.test("こんにちは")); // false

const r1 = /^abc/;
console.log(r1.test("abcdefg"));; // true
console.log(r1.test("Hello, abcdefg")); // false