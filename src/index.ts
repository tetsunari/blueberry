import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");
p.then((result) => {
    console.log(1);
});
p.then((result) => {
    console.log(2);
});
p.then((result) => {
    console.log(3);
});
// 1 2 3

p.then((result) => {
    console.log("成功", result);
});
p.catch((error) => {
    console.log("失败", error);
});

// 成功時と失敗時の両方を処理する
p.then((result) => {
    console.log("成功", result);
}, (error) => {
    console.log("失败", error);
});

// errorの型がわからないので、anyではなくunknownを使う
p.then((result) => {
    console.log("成功", result);
}, (error: unknown) => {
    console.log("失败", error);
});
