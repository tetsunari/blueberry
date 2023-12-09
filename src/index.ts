type SignType = "plus" | "minus";
function signNumber(type: SignType) {
    return type === "plus" ? 1 : -1;
}
function numberWithSign(number: number, type: SignType|"none") {
    if (type === "none") {
        return 0;
    } else {
        return number * signNumber(type);
    }
}
console.log(numberWithSign(5, "plus")); // 5
console.log(numberWithSign(5, "minus")); // -5
console.log(numberWithSign(5, "none")); // 0
