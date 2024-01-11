import { readFile } from "fs/promises";

const p = Promise.race([
    readFile("foo.txt", "utf8"),
    readFile("bar.txt", "utf8"),
    readFile("baz.txt", "utf8"),
]);
p.then((result) => {
    console.log(result);
});

const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        setTimeout(reject, duration);
    })
};
const p2 = Promise.race([
    readFile("foo.txt", "utf8"),
    sleepReject(1000),
]);
p2.then((result) => {
    console.log("success", result);
}, (error: unknown) => {
    console.log("error", error);
})
