import { readFile } from "fs/promises";

const pFoo = readFile("foo.txt", "utf8");
const pBar = readFile("bar.txt", "utf8");
const pBaz = readFile("baz.txt", "utf8");
const p = Promise.all([pFoo, pBar, pBaz]);
p.then((results) => {
    console.log("foo.txt:", results[0]);
    console.log("bar.txt:", results[1]);
    console.log("bax.txt:", results[2]);
});

// 上と同じ
const p2 = Promise.all([
    readFile("foo.txt", "utf8"),
    readFile("bar.txt", "utf8"),
    readFile("baz.txt", "utf8"),
]);
p2.then((results) => {
    const [foo, bar, baz] = results;
    console.log("foo.txt:", foo);
    console.log("bar.txt:", bar);
    console.log("baz.txt:", baz);
});
// 上と同じ
p2.then(([foo, bar, baz]) => {
    console.log("foo.txt:", foo);
    console.log("bar.txt:", bar);
    console.log("baz.txt:", baz);
});
/**
 * foo.txt: aiueo
 * bar.txt: bar
 * bax.txt: baz
 */
