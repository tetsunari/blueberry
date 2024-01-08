import { performance } from "perf_hooks";

setTimeout(() => {
    console.log("タイマーが呼び出されました");
}, 1000);

const start = performance.now();
let count = 0;
while (performance.now() - start < 1000) {
    count++;
}
console.log(`ループを${count}回実行しました`);
// ループをn回実行しました
// タイマーが呼び出されました
// 同期処理が先に実行される
