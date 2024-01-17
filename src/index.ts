import { readFile, writeFile } from "fs/promises";

const fooContent = await readFile("foo.txt", "utf8");
await writeFile("bar.txt", fooContent + fooContent);
console.log("Done!");

export const bar = fooContent + fooContent;
