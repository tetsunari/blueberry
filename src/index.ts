const num1 = Number(true);
console.log(num1);
// 1

const num2 = Number(false);
console.log(num2);
// 0

const num3 = Number(null);
console.log(num3);
// 0

const num4 = Number(undefined);
console.log(num4);
// NaN

const bigint1 = BigInt("1234");
console.log(bigint1);
// 1234n

const bigint2 = BigInt(500);
console.log(bigint2);
// 500n

const bigint3 = BigInt(true);
console.log(bigint3);
// 1n

// const bigint = BigInt("foobar");
// ランタイムエラー

const str1 = String(1234.5);
console.log(str1);
// "1234.5"

const str2 = String(true);
console.log(str2);
// "true"

const str3 = String(null);
const str4 = String(undefined);
console.log(str3, str4);
// "null undefined"

console.log(Boolean(123));
// true
console.log(Boolean(0));
// false
console.log(Boolean(1n));
// true
console.log(Boolean(0n));
// false
console.log(Boolean(""));
// false
console.log(Boolean("foobar"));
// true
console.log(Boolean(null));
// false
console.log(Boolean(undefined));
// false