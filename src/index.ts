const repeat = <T extends {
    name: string;
}>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}

type HasNameAndAge = {
    name: string,
    age: number,
}
console.log(repeat<HasNameAndAge>({
    name: "uhyo",
    age: 26,
}, 3))