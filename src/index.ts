const toLowerOrUpper = (str: string, upper?: boolean): string => {
    if (upper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper("Hello")); // hello
console.log(toLowerOrUpper("Hello", false)); // hello
console.log(toLowerOrUpper("Hello", true)); // HELLO