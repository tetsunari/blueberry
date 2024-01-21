import { readFile, writeFile } from "fs/promises";
const main = async function() {
    const fooContent = await readFile("foo.txt", "utf8");
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("success!");
};
console.log(main());
// 上と同じ
const main2 = async () => {
    const fooContent = await readFile("foo.txt", "utf8");
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("success!");
};
console.log(main2());

const obj = {
    normalMethod() {

    },
    async asyncMethod() {

    },
};
