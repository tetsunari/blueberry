import { readFile } from "fs";
import { performance } from "perf_hooks";

const startTime = performance.now();
readFile("foo.txt", "utf8", (err, result) => {
    const endTime = performance.now();
    console.log(result);
    console.log(`処理時間: ${endTime - startTime}ミリ秒`);
});
console.log("読み込み開始");
