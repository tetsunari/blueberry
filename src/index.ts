const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);
// 1158n

const result = 5n / 2n;
console.log(result);
// 2n

const wrong = 100n + 50;
// 50がbigintでないのでエラー