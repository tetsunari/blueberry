import { readFile } from "fs/promises";

const p1 = readFile("foo.txt", "utf8");
const p2 = p1.then((result) => {
    throw new Error("Error!!!");
});
p2.then((result) => {
    console.log(result);
});

// error handling
const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        setTimeout(reject, duration
    })
};
const p = readFile("foo.txt", "utf8");
    .then(() => sleepReject(1000))
    .then((result) => {
        console.log(result);
    }, () => {
        console.log("Error!");
    });

// error handling
const p3 = readFile("foo.txt", "utf8");
    .then(() => sleepReject(1000))
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error!", error);
    })

// error handling
const p4 = readFile("foo.txt", "utf8");
p4.then((result) => {
    console.log("Success!", result);
});
p4.catch((error) => {
    console.log("Error!", error);
});

// error handling
const p5 = readFile("foo.txt", "utf8");
const p6 = p5.then((result) => {
    console.log("Success!", result);
});
const p7 = p5.catch((error) => {
    console.log("Error!", error);
});

// correct error handling
const p8 = readFile("foo.txt", "utf8");
const p9 = p8.then((result) => {
    console.log("Success!", result);
});
const p10 = p9.catch((error) => {
    console.log("Error!", error);
});
