function map(array: number[], callback: (value: number) => number): number[] {
    const result: number[] = [];
    for (const elm of array) {
        result.push(callback(elm));
    }
    return result;
}
const data = [1,1,2,3,5,8,13];
const result = map(data, (x) => x * 10);
console.log(result);

function map1<T, U>(array: T[], callback: (value: T) => U): U[] {
    const result: U[] = [];
    for(const elm of array) {
        result.push(callback(elm));
    }
    return result;
}
const data1 = [-1, 0, 2, -2, 8];
const result1: boolean[] = map1(data1, (x) => x >= 0);
const result2 = map(data, (x) => x * 10);
console.log(result1);
console.log(result2);
