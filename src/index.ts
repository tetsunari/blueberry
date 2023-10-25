const repeat = function<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for(let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat(1, 5));

type Func = <T>(arg: T, num: number) => T[];
const repeat1: Func = (element, length) => {
    const result = [];
    for(let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat1("test", 5));
