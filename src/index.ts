try {
    console.log("try brock");
} catch (error) {
    console.log("catch brock");
} finally {
    console.log("finally brock");
}
/**
 * try brock
 * finally brock
 */

try {
    console.log("try brock");
} finally {
    console.log("finally brock");
}
/**
 * try brock
 * finally brock
 */

try {
    console.log("try brock");
    throwError();
} catch (error) {
    console.log("catch brock");
} finally {
    console.log("finally brock");
}
/**
 * try brock
 * catch brock
 * finally brock
 */

try {
    console.log("error start");
    // throwError();
    console.log("error end");
} finally {
    console.log("finally brock");
}
console.log("end");
/**
 * error start
 * finally brock
 */

function throwError() {
    throw new Error("error");
}

console.log(sum(100));
function sum(max: number): number {
    try {
        let result = 0;
        for (let i = 1; i <= max; i++) {
            result += i;
        }
        return result;
    } finally {
        console.log("finally brock");
    }
}
/**
 * finally brock
 * 5050
 */
