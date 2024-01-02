type Option<T> = { tag: "Some"; value: T } | { tag: "None" };
function doubleOption(obj: Option<number>) {
    return mapOption(obj, x => x * 2);
}
const four: Option<number> = { tag: "Some", value: 4 };
const none: Option<number> = { tag: "None" };
console.log(doubleOption(four)); // { tag: "Some", value: 8 }
console.log(doubleOption(none)); // { tag: "None" }

function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
    switch (obj.tag) {
        case "Some":
            return { tag: "Some", value: callback(obj.value) };
        case "None":
            return { tag: "None" };
    }
}
