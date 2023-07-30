import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question('文字列を入力してください:', (line) => {
//     console.log(`${line}が入力されました`);
//     rl.close();
// });

// rl.question('数値を入力してください:', (line) => {
//     console.log(line + 1000);
//     rl.close();
// });

// rl.question('数値を入力してください:', (line) => {
    // const result = line + 1000;
    // console.log(result);
    // rl.close();
// });

// rl.question('数値を入力してください:', (line) => {
    // const result = line + 1000;
    // console.log(result);
    // rl.close();
// })

rl.question('数値を入力してください:', (line) => {
    const num = Number(line);
    console.log(num + 1000);
    rl.close();
});


// 文字列を入力してください:foobar
// foobarが入力されました
// 数値を入力してください:1234
// 12341000
// 数値を入力してください:1234
// 12341000
// 数値を入力してください:1234
// 2234
// 数値を入力してください:foobar
// NaN