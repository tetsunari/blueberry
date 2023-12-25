type HasToString = {
    toString: () => string
}
function useToString1(value: HasToString) {
    console.log(`value is ${value.toString()}`);
}
useToString1({
    toString() {
        return "foo!";
    }
});
useToString1(3.14);

function useToString2(value: HasToString & object) {
    console.log(`value is ${value.toString()}`);
}
useToString2({
    toString() {
        return "foo!";
    }
});
// error: Argument of type 'number' is not assignable to parameter of type 'HasToString & object'.
// useToString2(3.14);

function useNever(value: never) {
    const num: number = value;
    const str: string = value;
    const obj: object = value;
    console.log(`value is ${value}`);
}
// error: Argument of type '{}' is not assignable to parameter of type 'never'.
// useNever({});
// error: Argument of type '3.14' is not assignable to parameter of type 'never'.
// useNever(3.14);

function thrower(): never {
    throw new Error("oops!");
}
const result: never = thrower();
const str: string = result;
console.log(str);
