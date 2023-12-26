function isStringOrNumber(value: unknown): value is string | number {
    return typeof value === "string" || typeof value === "number";
}
const something: unknown = 123;
if (isStringOrNumber(something)) {
    console.log(something);
    // something is string | number
    // 123
}

// error
function isStringOrNumber2(value: unknown): boolean {
    return typeof value === "string" || typeof value === "number";
}
const something2: unknown = 123;
if (isStringOrNumber2(something2)) {
    console.log(something2.toString());
    // Object is of type 'unknown'.
}

type Human = {
    type: "Human";
    name: string;
    age: number;
};
function isHuman(value: any): value is Human {
    if (value === null) return false;
    return (
        value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number"
    );
}

function assertHuman(value: any): asserts value is Human {
    if (value === null) {
        throw new Error("Given value is null or undefined");
    }
    if (
        value.type !== "Human" ||
        typeof value.name !== "string" ||
        typeof value.age !== "number"
    ) {
        throw new Error("Given value is not a Human");
    }
}
function checkAndUseHuman(value: unknown) {
    assertHuman(value);
    // ここから下ではvalueはHuman型として扱われる
    const name = value.name;
}
