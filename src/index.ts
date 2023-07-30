import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    const num = Number(line);

    if (0 <= num && num < 100) {
        console.log(`${num}は0以上100未満です`);
    } else {
        console.log(`${num}は0以下100未満ではありません`);
    }
    if (!Number.isNaN(num)) {
        console.log(num,"はNANではありません")
    }
    rl.close();
})

// 数値を入力してください:10
// 10は0以上100未満です
// 10 はNANではありません
// root@cb390b530e8a:/app# node dist/index.js
// 数値を入力してください:100
// 100は0以下100未満ではありません
// 100 はNANではありません
// root@cb390b530e8a:/app# node dist/index.js
// 数値を入力してください:test
// NaNは0以下100未満ではありません
// !Number.isNaNは　NaNでない時のみ処理を行いたい場合