const sum = (base: number, ...args: number[]): number => {
    let result = base * 1000;
    for (const num of args) {
        result += num;
    }
    return result;
}
console.log(sum(1, 10, 100)); // 1110
console.log(sum(123, 456)); // 123456
console.log(sum()); // error
/**
 * sum(1,10,100)ならbaseに1、argsに[10,100]が入る
 */