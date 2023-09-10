console.log("Hello, abbbbc world! abbc".replace(/ab+c/, "foobar")); // Hello, foobar world! abbc
console.log("Hello, abbbbbc world! abbc".replace(/ab+c/g, "foobar")); // Hello, foobar world! foobar

const result = "Hello, abbbbc world! abc".match(/a(b+)c/);
if (result !== null) {
    console.log(result[0]); // abbbbc
    console.log(result[1]); // bbbb
}

const result1 = "Hello, abbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result1 !== null) {
    console.log(result1.groups); // [Object: null prototype] { worldName: 'bbbbb' }
}

const result2 = "Hello, abbbbbc world! abc".match(/a(b+)c/g);
console.log(result2); // [ 'abbbbbc', 'abc' ]