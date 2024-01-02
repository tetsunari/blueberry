type Human = {
    type: "Human",
    name: string,
    age: number
};
function isHuman(value: any): value is Human {
    if (value === null) return false;
    return (
        value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number"
    )
}

function isPropertyAccess(value: unknown): value is { [key: string]: unknown } {
    return value != null;
}
function isHuman1(value: unknown): value is Human {
    if (!isPropertyAccess(value)) return false;
    return (
        value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number"
    )
};
