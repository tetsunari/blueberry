type Option <T> = {
    tag: "some",
    value: T
} | {
    tag: "none"
};

function showNumberIfExists(obj: Option<number>): void {
    if (isSome(obj)) {
        console.log(obj.value);
    }
}

function isSome<T>(obj: Option<T>): obj is { tag: "some", value: T } {
    return obj.tag === "some";
}
// other way
// function isSome<T>(obj: Option<T>): obj is Extract<Option<T>, { tag: "some" }> {
//     return obj.tag === "some";
// }

// other way
// type Some<T> = {
//     tag: "some";
//     value: T;
// }
// type None = {
//     tag: "none";
// }
// type Option<T> = Some<T> | None;
// function isSome<T>(obj: Option<T>): obj is Some<T> {
//     return obj.tag === "some";
// }
