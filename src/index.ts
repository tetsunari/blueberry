import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力してください:', (name) => {
    if (name === '') {
        name = '名無し'
    }
    console.log(`こんにちは${name}さん`);
    rl.close();
})

let num = 0;
num += 100;
console.log(num);
// 100
num *= 4;
console.log(num);
// 400
num -= 200;
console.log(num);
// 200
num /= 2;
console.log(num);
// 100
num **= 0.5;
console.log(num);
// 10
