import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力してください:', (name) => {
    console.log("こんにちは、 " + name + "さん");
    rl.close();
});
// 名前を入力してください:uhyo
// こんにちは、 uhyoさん

console.log("foo" + true);
// footrue
console.log(null + "bar");
// nullbar
// 文字列として扱われる