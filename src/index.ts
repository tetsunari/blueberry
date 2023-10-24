const repeat = function<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}

const repeat2 = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}

const utils = {
    repeat3<T>(element: T, length: number): T[] {
        const result: T[] = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }
}
console.log(repeat(1, 5));

const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];
const p = pair<string, number>("uhyo", 26);
