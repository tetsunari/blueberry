import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力してください:', (name) => {
    const displayName = name || "名無し";
    const displayIsInput = Boolean(name) && "入力済";
    console.log(`こんにちは、${displayName}さん`);
    console.log(`${displayIsInput}`);
    rl.close();
})

// 名前を入力してください:
// こんにちは、名無しさん
// false
// root@cb390b530e8a:/app# node dist/index.js
// 名前を入力してください:test
// こんにちは、testさん
// 入力済

const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);
// ??は nullと undefinedのみ判定する
// SECRET=foo node dist/index.ts
//　を実行すると secretはfooです
// 何も指定しないと secretはdefaultです